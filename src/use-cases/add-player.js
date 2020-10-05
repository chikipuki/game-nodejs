import ExceptionFactory from '../exceptions/factory'

export default function addPlayerFactory({ repository }) {

  return async function addPlayer(addPlayerRequest) {

    const id = addPlayerRequest.id;

    if (!id) {
      throw ExceptionFactory.getPlayerIdNotSpecified();
    }

    const exists = await repository.findById(id)

    if (exists) {
      throw ExceptionFactory.getPlayerAlreadyExistsException();
    }
  }
}