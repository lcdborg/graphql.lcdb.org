CREATE VIEW ArtistUnprefix AS
SELECT artist_key as id, name, unprefix(artists.name) AS nameUnprefix, top100
FROM artists;

CREATE VIEW ArtistUnprefixSource AS
SELECT DISTINCT artist_key as id, name, unprefix(artists.name) AS nameUnprefix, top100
FROM artists, shows, shninfo
WHERE ref_artist = artist_key
      AND ref_shows = shows_key;
