const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('Hello CoolCast fans!');
});

server.get('/about', (req, res) => {
	res.send(`About us....
Bios about the \"Cooper Scoopers\"...`);
});

server.get('/merch', (req, res) => {
	res.send(`CoolCast merch!!!
Cooper scooper themed headphones
pajamas
stuffed animals (webkins esque, also of cooper scoopers)
bobble heads (definitely)`);
});

server.get('/episodes', (req, res) => {
	res.send('Here we post Cooool Casting episodes as they come out');
});

server.get('/fungames', (req, res) => {
	res.send(`Embed a few mini games
perhaps a mine sweeper clone`);
});

//////////////// LISTEN //////////////////

server.listen(3000, () => {
	console.log('Cooper's CoolCast listening in for requests...');
});
