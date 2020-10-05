var express = require('express');
var router = express.Router();
var Repository = require('../repositories/player');
require('../config/db')

router.get('/', function(req, res, next) {
  console.log({Repository})
  Repository.all((data) => res.json(data))
});

router.post('/player', function(req, res, next) {
  res.send('create a player with initial (0, 0) position');
})

router.get('/:id/position', function(req, res, next) {
  res.send('return current position')
})

router.patch('/:id/move', function(req, res, next) {
  res.send(`player ${req.params.id} move ${req.query.direction}`)
})

router.get('/players', function(req, res, next) {
  res.send('return list of all players and their positions');
})

router.delete('/:id', function(req, res, next) {
  res.send('delete a player from players list');
});

router.get('/:id/route', function(req, res, next) {
  res.send('return all positions a player has visited in the visit order');
});

module.exports = router;
