const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Room = require('./roomDB');
const HotelSchema = new Schema({
    name: {
        type: String
        
    },
    address: {
        type: String
    },
    startsfrom: {
        type: Number
        
    },
    rooms: [{type: Number, ref: 'Room'}]
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;