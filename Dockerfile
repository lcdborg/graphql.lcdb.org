FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install --yes \
    apt-utils \
    bash-completion \
    gnupg2 \
    openssl \
    pv \
    lsb-release \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    vim \
    wget \
    procps \
    default-mysql-client \
    libsnmp-dev \
    libcurl4-openssl-dev \
    libzip-dev \
    redis

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install \
    mbstring \
    pdo_mysql \
    mysqli \
    curl \
    exif \
    intl \
    pcntl \
    bcmath \
    snmp \
    zip
RUN pecl install redis
RUN docker-php-ext-enable redis

# Apache
RUN a2enmod rewrite
COPY .docker/config/ports.conf /etc/apache2/ports.conf
COPY .docker/config/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN rm /etc/apache2/sites-enabled/000-default.conf
RUN ln -s /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-enabled/000-default.conf

# PHP
COPY .docker/config/php.ini /usr/local/etc/php/php.ini

# Get latest Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN mv composer.phar /bin/composer
RUN php -r "unlink('composer-setup.php');"

# Copy app files
WORKDIR /var/www
ADD . /var/www
RUN rm -rf vendor
RUN composer install --no-dev

EXPOSE 8080
