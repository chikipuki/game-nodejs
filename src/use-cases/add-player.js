const PlayerModel = require('../models/player');

module.exports = function ({ repository, exceptionFactory }) {
  return {
    addPlayer: async function({ id, size }) {
      
      if (!id) {
        throw exceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId)
    
      if (exists && exists.length > 0) {
        throw exceptionFactory.getPlayerAlreadyExists();
      }

      const player = PlayerModel.createPlayer({ id, size, exceptionFactory });

      await repository.create(player.getSchemaData());

      return player.getSchemaData();

    }
  }
}