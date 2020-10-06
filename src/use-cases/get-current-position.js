const ExceptionFactory = require('../exceptions/factory')

module.exports = function ({ repository }) {
  return {
    getPosition: async function({ id }) {
      
      if (!id) {
        throw ExceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId)
    
      if (!exists || exists.length === 0) {
        throw ExceptionFactory.getPlayerNotFound();
      }

      const player = exists[0];
      const routes = player.routes;

      const position = routes[routes.length - 1];
      const finished = position.x === player.width - 1 && position.y === player.height - 1;

      return { finished, ...position };

    }
  }
}