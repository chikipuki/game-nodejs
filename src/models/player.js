function create({ id, width, height, routes }) {
  return {
    id: id.toString(),
    width,
    height,
    routes,

    getSchemaData: () => {
      return {
        id,
        width,
        height,
        routes
      }
    },

    getCurrentPosition: () => {

      const position = routes[routes.length - 1];
      const finished = position.x === width - 1 && position.y === height - 1;

      return { finished, ...position }
    }
  }
}

module.exports = {

  createPlayer({ id, size, exceptionFactory }) {

    if (!size) {
      throw exceptionFactory.getSizeNotSpecified();
    }

    if (!size.x || !size.y) {
      throw exceptionFactory.getSizeParametersNotSpecified();
    }

    return create({ 
      id, 
      width: size.x,
      height: size.y,
      routes: [ { x: 0, y: 0 } ]
    })

  },

  createPlayerFromSchema(data) {
    return create(data)
  }

}