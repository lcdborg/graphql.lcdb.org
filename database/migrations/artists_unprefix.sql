CREATE VIEW ArtistUnprefix AS
SELECT artist_key as id, name, unprefix(artists.name) AS nameUnprefix, top100
FROM artists;
