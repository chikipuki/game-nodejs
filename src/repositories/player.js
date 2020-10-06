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
            'data': { player }
        };
        resolve(data);
      });
    });
  },

  all: () => {
    return new Promise(function(resolve, reject) {
      Player.find({}, (err, players) => {

        console.log({ players })

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
            'data': { players }
        };
        resolve(data);
      });
    });
  },

  create: (player) => {
    return new Promise(function (resolve, reject) {
      Player.create(player, (err, newPlayer) => {

        let data = {};

        if (err) {
            data = {
                error: true,
                error_message: err
            };
            reject(err);
            return;
        }
        
        data = {
            'data': { player: newPlayer }
        };
        resolve(data);
      });
    });
  },

  update: (id, data, cb) => {

    return new Promise(function (resolve, reject) {
      Player.update({'_id': id}, {$set: data}, (err) => {

        let data = {};

        if (err) {
            data = {
                error: true,
                error_message: err
            };
            reject(data);
            return;
    }

        Player.findById(id, (err, player) => {
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
        });
    });
  });
  },

  remove: (id, cb) => {
    return new Promise(function(resolve, reject) {
      Player.findByIdAndRemove(id, (err) => {
        if (err) {
            data = {
                error: true,
                error_message: err
            };
            reject(data);
            return;
        }

        data = {
            status: true
        };
        resolve(data);
    });
  });
  }

};
