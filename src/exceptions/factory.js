export default {

  getPlayerIdNotSpecified() {
    return Error('player id not specified');
  },

  getPlayerAlreadyExistsException() {
    return Error('player already exists')
  }

}