var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.send({ lol: 'index' });
});

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
