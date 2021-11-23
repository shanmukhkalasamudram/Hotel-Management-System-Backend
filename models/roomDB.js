const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
    hotel: {
        type: String
    },
    number: {
        type: String,   
    },
    type: {
        type: String,
    },
    price: {
        type: Number,
    },
    maxGuests: {
        type: Number,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;