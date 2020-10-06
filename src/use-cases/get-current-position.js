module.exports = function ({ repository, exceptionFactory }) {
  return {
    getPosition: async function({ id }) {
      
      if (!id) {
        throw exceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId)
    
      if (!exists || exists.length === 0) {
        throw exceptionFactory.getPlayerNotFound();
      }

      const player = exists[0];
      const routes = player.routes;

      const position = routes[routes.length - 1];
      const finished = position.x === player.width - 1 && position.y === player.height - 1;

      return { finished, ...position };

    }
  }
}