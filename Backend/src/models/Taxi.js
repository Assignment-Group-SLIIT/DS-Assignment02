const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaxiReservationSchema = new Schema({

    user: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    distance: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    paymentStatus: {
        type: String,
        required: true,
        enum: ['Completed', 'Pending']
    },
    date: {
        type: String,
        required: true
    }


})

const TaxiReservation = mongoose.model("TaxiReservation", TaxiReservationSchema);
module.exports = TaxiReservation;