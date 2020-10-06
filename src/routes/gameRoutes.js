var express = require('express');
var router = express.Router();
var repository = require('../repositories/player');
var AddPlayerUseCase = require('../use-cases/add-player');
var GetCurrentPositionUseCase = require('../use-cases/get-current-position');

router.get('/', async function(req, res, next) {
  const result = await GetCurrentPositionUseCase({ repository }).getPosition({ id: 1 });
  res.json(result);
});

router.post('/player', async function(req, res, next) {
  const result = await AddPlayerUseCase({ repository }).addPlayer({ id: 112, size: { x: 4, y: 5 } });
  res.json(result);
})

router.get('/:id/position', async function(req, res, next) {
  const result = await GetCurrentPositionUseCase({ repository }).getPosition({ id: req.params.id });
  res.json(result);
})

router.patch('/:id/move', async function(req, res, next) {
  res.json(`player ${req.params.id} move ${req.query.direction}`)
})

router.get('/players', async function(req, res, next) {
  res.json('return list of all players and their positions');
})

router.delete('/:id', async function(req, res, next) {
  res.json('delete a player from players list');
});

router.get('/:id/route', async function(req, res, next) {
  res.json('return all positions a player has visited in the visit order');
});

module.exports = router;
