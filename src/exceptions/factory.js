const BAD_REQUEST = 400;
const CONFLICT = 409;
const SERVER_ERROR = 500;


function createError(message, status = SERVER_ERROR) {
  return {
    message,
    status
  };
}

module.exports = {

  getPlayerIdNotSpecified() {
    return createError('player id not specified', BAD_REQUEST);
  },

  getPlayerAlreadyExists() {
    return createError('player already exists', CONFLICT);
  },

  getSizeNotSpecified() {
    return createError('size not specified', BAD_REQUEST);
  },

  getSizeParametersNotSpecified() {
    return createError('size parameters not specified', BAD_REQUEST);
  },

  getSizeParametersMustBeBiggerThanZero() {
    return createError('size parameters must be bigger than zero', BAD_REQUEST);
  },

  getPlayerNotFound() {
    return createError('player not found', BAD_REQUEST);
  },

}