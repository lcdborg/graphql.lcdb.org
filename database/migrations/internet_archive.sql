CREATE TABLE Collection_InternetArchive (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(250) NOT NULL, UNIQUE INDEX UNIQ_B56B2C2F5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = MyISAM;
CREATE TABLE Creator_InternetArchive (id INT AUTO_INCREMENT NOT NULL, artist_id INT UNSIGNED DEFAULT NULL, name VARCHAR(250) NOT NULL, UNIQUE INDEX UNIQ_F769A7625E237E06 (name), INDEX IDX_F769A762B7970CF8 (artist_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = MyISAM;
CREATE TABLE File_InternetArchive (id INT AUTO_INCREMENT NOT NULL, identifier_id INT NOT NULL, name VARCHAR(255) NOT NULL, body LONGTEXT DEFAULT NULL, INDEX IDX_D0DB8096EF794DF6 (identifier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = MyISAM;
CREATE TABLE Identifier_InternetArchive (id INT AUTO_INCREMENT NOT NULL, creator_id INT NOT NULL, source_id INT UNSIGNED DEFAULT NULL, archiveIdentifier VARCHAR(255) NOT NULL, server VARCHAR(255) DEFAULT NULL, performanceDate VARCHAR(255) DEFAULT NULL, addedAt DATETIME NOT NULL, title VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, uploader VARCHAR(255) DEFAULT NULL, venue VARCHAR(255) DEFAULT NULL, coverage VARCHAR(255) DEFAULT NULL, year VARCHAR(255) DEFAULT NULL, notes LONGTEXT DEFAULT NULL, taper LONGTEXT DEFAULT NULL, lineage LONGTEXT DEFAULT NULL, archiveSource LONGTEXT DEFAULT NULL, md5s LONGTEXT DEFAULT NULL, INDEX IDX_977D2AE861220EA6 (creator_id), INDEX IDX_977D2AE8953C1C61 (source_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = MyISAM;
CREATE TABLE CollectionToIdentifier_InternetArchive (identifier_id INT NOT NULL, collection_id INT NOT NULL, INDEX IDX_3CE1696CEF794DF6 (identifier_id), INDEX IDX_3CE1696C514956FD (collection_id), PRIMARY KEY(identifier_id, collection_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = MyISAM;

ALTER TABLE Creator_InternetArchive ADD CONSTRAINT FK_F769A762B7970CF8 FOREIGN KEY (artist_id) REFERENCES artists (artist_key);
ALTER TABLE File_InternetArchive ADD CONSTRAINT FK_D0DB8096EF794DF6 FOREIGN KEY (identifier_id) REFERENCES Identifier_InternetArchive (id);
ALTER TABLE Identifier_InternetArchive ADD CONSTRAINT FK_977D2AE861220EA6 FOREIGN KEY (creator_id) REFERENCES Creator_InternetArchive (id);
ALTER TABLE Identifier_InternetArchive ADD CONSTRAINT FK_977D2AE8953C1C61 FOREIGN KEY (source_id) REFERENCES shninfo (shninfo_key);
ALTER TABLE CollectionToIdentifier_InternetArchive ADD CONSTRAINT FK_3CE1696CEF794DF6 FOREIGN KEY (identifier_id) REFERENCES Identifier_InternetArchive (id);
ALTER TABLE CollectionToIdentifier_InternetArchive ADD CONSTRAINT FK_3CE1696C514956FD FOREIGN KEY (collection_id) REFERENCES Collection_InternetArchive (id);

alter table Identifier_InternetArchive change archiveIdentifier archiveIdentifier varchar(250) not null;
create index idx_identifier on Identifier_InternetArchive (archiveIdentifier);

delimiter //
CREATE FUNCTION unprefix_utf8mb4(n varchar(250)) RETURNS varchar(250) CHARSET utf8mb4
BEGIN
IF lower(substring(n, 1, 2)) = 'a ' THEN RETURN substring(n, 3);
ELSEIF lower(substring(n, 1, 3)) = 'an ' THEN RETURN substring(n, 4);
ELSEIF lower(substring(n, 1, 4)) = 'the ' THEN return substring(n, 5);
ELSEIF lower(substring(n, 1, 3)) = 'la ' THEN return substring(n, 4);
ELSEIF lower(substring(n, 1, 3)) = 'le ' THEN return substring(n, 4);
ELSEIF lower(substring(n, 1, 2)) = "l'" THEN return substring(n, 3);
ELSEIF lower(substring(n, 1, 1)) = "[" THEN return substring(n, 2);
ELSE RETURN n;
END IF;
END;
//
delimiter ;

CREATE VIEW CreatorUnprefix_InternetArchive AS
SELECT id, name, unprefix_utf8mb4(name) AS nameUnprefix
FROM Creator_InternetArchive;
