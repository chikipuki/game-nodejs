const PlayerModel = require('../models/player');

module.exports = function ({ repository }) {
  return {
    getAll: async function() {

      const list = await repository.all();

      const players = list.map(item => PlayerModel.createPlayerFromSchema(item).getCurrentState())

      return { players };

    }
  }
}