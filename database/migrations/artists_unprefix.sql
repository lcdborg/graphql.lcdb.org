CREATE VIEW artists_unprefix AS
SELECT artists.*, unprefix(artists.name) AS name_unprefix
FROM artists;
