const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    id: {
      required: true,
      unique: true,
      type: String
    },

    width: {
      required: true,
      type: Number
    },

    height: {
      required: true,
      type: Number
    },

    routes: {
      required: true,
      type: Array
    }

});

module.exports = mongoose.model('Player', schema);
