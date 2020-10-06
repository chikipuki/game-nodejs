const BAD_REQUEST = 400;
const CONFLICT = 409;
const SERVER_ERROR = 500;


function createError(message, status = SERVER_ERROR) {
  const result = new Error(message);
  result.status = status
  return result;
}

module.exports = {

  getPlayerIdNotSpecified() {
    return createError('player id not specified', BAD_REQUEST);
  },

  getPlayerAlreadyExists() {
    return createError('player already exists', CONFLICT);
  },

  getSizeParametersNotSpecified() {
    return createError('size parameters not specified', BAD_REQUEST);
  }

}