module.exports = function ({ repository, exceptionFactory }) {
  return {
    delete: async function({ id }) {
      
      if (!id) {
        throw exceptionFactory.getPlayerIdNotSpecified();
      }

      const playerId = id.toString();
      const exists = await repository.findById(playerId);
    
      if (!exists || exists.length === 0) {
        throw exceptionFactory.getPlayerNotFound();
      }

      const result = await repository.remove(playerId);

      return result;

    }
  }
}