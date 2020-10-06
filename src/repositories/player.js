const Player = require('../schema/playerSchema');

module.exports = {

  findById: (id) => {
    console.log('findById ', id);
    return new Promise(function(resolve, reject) {
      Player.find({ id }, (err, player) => {
        if (err) {
          reject(err);
        } else {
          resolve(player);
        }
      });
    });
  },

  all: () => {
    return new Promise(function(resolve, reject) {
      Player.find({}, (err, players) => {
        if (err) {
          reject(err);
        } else {
          resolve(players);
        }
      });
    });
  },

  create: (playerData) => {
    return new Promise(function (resolve, reject) {
      Player.create(playerData, (err, player) => {
        if (err) {
          reject(err);
        } else {
          resolve(player);
        }
      });
    });
  },

  update: (id, data) => {
    return new Promise(function (resolve, reject) {
      Player.update({'_id': id}, {$set: data}, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
    });
  });
  },

  remove: (id) => {
    return new Promise(function(resolve, reject) {
      Player.remove({ id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
    });
  });
  }

};
