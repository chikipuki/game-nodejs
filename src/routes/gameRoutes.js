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

async function execute (fn, res) {
  try {
    const result = await fn();
    res.json(result);
  } catch (e) {
    console.log({e})
    res.status(e.status || 500);
    res.json(e);
  }
}

router.get('/', async function(req, res, next) {
  res.json('Welcome');
});

router.post('/player', async function(req, res, next) {
  execute(() => AddPlayerUseCase({ repository, exceptionFactory }).addPlayer({ id: req.body.id, size: req.body.size }), res);
})

router.get('/:id/position', async function(req, res, next) {
  execute(() => GetCurrentPositionUseCase({ repository, exceptionFactory }).getPosition({ id: req.params.id }), res);
})

router.patch('/:id/move', async function(req, res, next) {
  execute(() => MoveUseCase({ repository, exceptionFactory }).move({ id: req.params.id, direction: req.query.direction }), res);
})

router.get('/players', async function(req, res, next) {
  execute(() => ListPlayersUseCase({ repository }).getAll(), res);
})

router.delete('/:id', async function(req, res, next) {
  execute(() => DeletePlayerUseCase({ repository, exceptionFactory }).delete({ id: req.params.id }), res);
});

router.get('/:id/route', async function(req, res, next) {
  execute(() => GetRoutesUseCase({ repository, exceptionFactory }).getRoutes({ id: req.body.id }), res);
});

module.exports = router;


