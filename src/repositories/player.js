const Player = require('../schema/player');

module.exports = {

  findById: (id) => {
    console.log('findById ', id);
    return new Promise(function(resolve, reject) {
      console.log('promise callback')
      Player.find({ id }, (err, player) => {
        console.log('inside player callback')
        let data = {};

        if (err) {
            console.log({ err , reject: true })
            reject(err);
            return;
        }
        console.log({ data, resolve: true })
        resolve(player);
      });
    });
  },

  all: () => {
    return new Promise(function(resolve, reject) {
      Player.find({}, (err, players) => {

        console.log({ players })

        if (err) {
            reject(err);
            return;
        }
        resolve(players);
      });
    });
  },

  create: (playerData) => {
    return new Promise(function (resolve, reject) {
      Player.create(playerData, (err, player) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(player);
      });
    });
  },

  update: (id, data) => {

    return new Promise(function (resolve, reject) {
      Player.update({'_id': id}, {$set: data}, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(true);
    });
  });
  },

  remove: (id) => {
    return new Promise(function(resolve, reject) {
      Player.findByIdAndRemove(id, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(true);
    });
  });
  }

};
