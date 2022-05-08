const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelRoomSchema = new Schema({

    hotelName: {
        type: String,
        required: true,
        unique: false
    },

    roomNo: {
        type: String,
        required: true,
    },

    floor: {
        type: Number,
        required: true,
    },

    type: {
        type: String,
        required: true,
        enum: ['Single', 'Double', 'Family', 'Luxuary']
    },

    status: {
        type: String,
        required: true,
        enum: ['Available', 'Reserved']
    },

    reservationStartDate: {
        type: String,
        default: "None"
        // required: true,
    },

    reservationEndDate: {
        type: String,
        default: "None"
        // required: true,
    },

    reservationPrice: {
        type: Number,
        default: 0
        // required: true,
    },

    paymentStatus: {
        type: String,
        enum: ['Completed', 'Pending']
    },

    reserverName: {
        type: String,

    },
    mustPayOnline: {
        type: Boolean,

    }
})

const HotelRoom = mongoose.model("HotelRoom", hotelRoomSchema);
module.exports = HotelRoom;