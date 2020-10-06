var express = require('express');

var router = express.Router();

var repository = require('../repositories/player');

var exceptionFactory = require('../exceptions/factory');

var AddPlayerUseCase = require('../use-cases/add-player');
var GetCurrentPositionUseCase = require('../use-cases/get-current-position');
var ListPlayersUseCase = require('../use-cases/list-players')
var DeletePlayerUseCase = require('../use-cases/delete-player')

router.get('/', async function(req, res, next) {
  const result = await DeletePlayerUseCase({ repository, exceptionFactory }).delete({ id: 2 });
  res.json(result);
});

router.post('/player', async function(req, res, next) {
  const result = await AddPlayerUseCase({ repository, exceptionFactory }).addPlayer({ id: req.body.id, size: req.body.size });
  res.json(result);
})

router.get('/:id/position', async function(req, res, next) {
  const result = await GetCurrentPositionUseCase({ repository, exceptionFactory }).getPosition({ id: req.params.id });
  res.json(result);
})

router.patch('/:id/move', async function(req, res, next) {
  res.json(`player ${req.params.id} move ${req.query.direction}`)
})

router.get('/players', async function(req, res, next) {
  const result = await ListPlayersUseCase({ repository }).getAll();
  res.json(result);
})

router.delete('/:id', async function(req, res, next) {
  const result = await DeletePlayerUseCase({ repository, exceptionFactory }).delete({ id: req.params.id });
  res.json(result);
});

router.get('/:id/route', async function(req, res, next) {
  res.json('return all positions a player has visited in the visit order');
});

module.exports = router;
