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

      if (!size || !size.x || !size.y) {
        throw exceptionFactory.getSizeParametersNotSpecified();
      }

      const playerData = {
        id: id.toString(),
        width: size.x,
        height: size.y,
        routes: [ { x: 0, y: 0 }]
      }

      const createdPlayer = await repository.create(playerData);

      return createdPlayer;

    }
  }
}