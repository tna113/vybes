-- TODO: check to see if vybes_db exists. if no, create. if yes, use
USE	vybes_db;

CREATE TABLE `user` (
	`userId` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
);

CREATE TABLE `trackPlaylist` (
	`trackPlaylistId` varchar(255) NOT NULL,
    `playlistId` varchar(255) NOT NULL,
    `userId` varchar(255) NOT NULL
);

CREATE TABLE `playlist` (
	`playlistId` varchar(255) NOT NULL,
    `playlistName` varchar(255) NOT NULL
);

CREATE TABLE `track` (
	`trackId` varchar(255) NOT NULL,
    `trackPlaylsitId` varchar(255) NOT NULL,
    `trackName` varchar(255) NOT NULL,
    `rating` int,
    `genre` varchar(255) NOT NULL,
    `dateAdded` date NOT NULL,
    `comments` json
);

CREATE TABLE `artist` (
	`artistId` varchar(255) NOT NULL,
    `artistName` varchar(255) NOT NULL
);

CREATE TABLE `album` (
	`albumId` varchar(255) NOT NULL,
    `artistId` varchar(255) NOT NULL
);

-- TODO: add dummmy data
-- TODO: indexing
-- TODO: delete dummy data