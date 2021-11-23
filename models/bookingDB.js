const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const room = require('./roomDB');
const hotel = require('./hotelDB');
const user = require('./userDB');

const BookingSchema = new Schema({
    hotel: {
        type: String
    },
    checkin: {
        type: Date
    },
    checkout: {
        type: Date
    },
    amount: {
        type: Number
    },
    guests: {
        type: Number,
        
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;