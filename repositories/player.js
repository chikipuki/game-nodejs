const Player = require('../models/player');

module.exports = {

    all: (cb) => {
        console.log('repository all')
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
        let player = {name: data.name, email: data.email};

        Player.create(player, (err, player) => {

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
