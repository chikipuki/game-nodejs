const ExceptionFactory = require('../exceptions/factory')

module.exports = function ({ repository }) {
  return {
    getPosition: async function({ id }) {
      
      console.log({ id })
    
      if (!id) {
        throw ExceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId)
    
      console.log({ exists })
    
      if (!exists || exists.length === 0) {
        throw ExceptionFactory.getPlayerNotFound();
      }

      const player = exists[0];
      const routes = player.routes;

      console.log({ routes });

      return routes[routes.length - 1];
    }
  }
}