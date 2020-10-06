var express = require('express');

var router = express.Router();

var repository = require('../repositories/playerRepository');

var exceptionFactory = require('../exceptions/factory');

var AddPlayerUseCase = require('../use-cases/add-player');
var GetCurrentPositionUseCase = require('../use-cases/get-current-position');
var ListPlayersUseCase = require('../use-cases/list-players');
var DeletePlayerUseCase = require('../use-cases/delete-player');
var GetRoutesUseCase = require('../use-cases/get-routes');
var MoveUseCase = require('../use-cases/MoveUseCase');

router.get('/', async function(req, res, next) {
  const result = await MoveUseCase({ repository, exceptionFactory }).move({ id: 1, direction: 'down' });
  const r = await GetCurrentPositionUseCase({ repository, exceptionFactory }).getPosition({ id: 1 });
  res.json({ ...result, ...r });
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
  const result = await MoveUseCase({ repository, exceptionFactory }).move({ id: req.params.id, direction: req.query.direction });
  res.json(result);
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
  const result = await GetRoutesUseCase({ repository, exceptionFactory }).getRoutes({ id: req.body.id });
  res.json(result);
});

module.exports = router;
