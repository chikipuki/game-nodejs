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
    },

    getCurrentState: () => {

      const position = routes[routes.length - 1];
      const finished = position.x === width - 1 && position.y === height - 1;

      return { id, finished, position }
    },

    getRoutes: () => {
      return { route: routes }
    },

    move: ({ direction }) => {
      if (!direction) {
        return false;
      }

      const currentPosition = routes[routes.length - 1]
      let x = currentPosition.x;
      let y = currentPosition.y;

      if (x === width - 1 && y === height - 1) {
        return false;
      }

      switch (direction.toLowerCase()) {
        case 'up': 
          y--; 
          break;
        case 'down': 
          y++;
          break;
        case 'left': 
          x--; 
          break;
        case 'right': 
          x++; 
          break;
      }

      if (x < 0 || x >= width) {
        return false;
      }

      if (y < 0 || y >= height) {
        return false;
      }

      routes.push({ x, y });

      return true;
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