const PlayerModel = require('../models/player');

module.exports = function ({ repository, exceptionFactory }) {
  return {
    getRoutes: async function({ id }) {
      
      if (!id) {
        throw exceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId);
    
      if (!exists || exists.length === 0) {
        throw exceptionFactory.getPlayerNotFound();
      }

      const player = PlayerModel.createPlayerFromSchema(exists[0]);

      return player.getRoutes();

    }
  }
}