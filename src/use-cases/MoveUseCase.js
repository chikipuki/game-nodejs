const PlayerModel = require('../models/player');

module.exports = function ({ repository, exceptionFactory }) {
  return {
    move: async function({ id, direction }) {
      
      if (!id) {
        throw exceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId);
    
      if (!exists || exists.length === 0) {
        throw exceptionFactory.getPlayerNotFound();
      }

      const player = PlayerModel.createPlayerFromSchema(exists[0]);
      
      const success = player.move({ direction });

      if (success) {
        await repository.update(player.getSchemaData());
      }

      return { success }

    }
  }
}