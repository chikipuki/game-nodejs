const Player = require('../schema/player');

module.exports = {

    findById: (id) => {
      return new Promise(function(resolve, reject) {
        Player.findById(id, (err, player) => {
          let data = {};

          if (err) {
              data = {
                  error: true,
                  error_message: err
              };
              reject(data);
              return;
          }
          data = {
              'data': {player}
          };

          resolve(data);
        })
      })
    },

    all: (cb) => {
        Player.find({}, (err, players) => {

            console.log({ players })

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': {players}
            };

            return cb(data);

        });

    },
    get: (id, cb) => {

        Player.findById(id, (err, player) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': {player}
            };

            return cb(data);

        });
    },
    create: (data, cb) => {
        let player = {
          id: data.id, 
          width: data.size.x, 
          height: data.size.y,
          routes: [{ x: 0, y: 0}]
        };

        Player.create(player, (err, newPlayer) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            
            data = {
                'data': {player: newPlayer}
            };

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Player.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            Player.findById(id, (err, player) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                }

                data = {
                    'data': {player}
                };

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Player.findByIdAndRemove(id, (err) => {

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                status: true
            };

            return cb(data);

        });
    }

};
