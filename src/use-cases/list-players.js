const PlayerModel = require('../models/player');

module.exports = function ({ repository }) {
  return {
    getAll: async function() {

      const list = await repository.all();

      console.log({ list })

      const players = list.map(item => PlayerModel.createPlayerFromSchema(item).getCurrentState())

      return { players };

    }
  }
}