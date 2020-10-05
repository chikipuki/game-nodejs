const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    id: {
      required: true,
      unique: true,
      type: String
    },

    routes: {
      required: true,
      type: Array
    }

});

module.exports = mongoose.model('Player', schema);
