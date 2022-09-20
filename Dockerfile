FROM php:8.1-apache

WORKDIR /var/www

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
    git \
    wget \
    procps \
    sudo \
    default-mysql-client \
    snmp \
    libsnmp-dev \
    libcurl4-openssl-dev \
    libzip-dev

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

# Apache
RUN a2enmod rewrite

# Get latest Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN mv composer.phar /bin/composer
RUN php -r "unlink('composer-setup.php');"

EXPOSE 80
