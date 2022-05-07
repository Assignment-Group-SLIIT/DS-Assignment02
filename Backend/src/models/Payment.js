const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    cardNo: {
        type: String,
        required: true,
        unique: false
    },

    amount: {
        type: String,
        required: true,
    },

    CVC: {
        type: Number,
        required: true,
        maxlength: 3
    },
    cardHolder: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }


})

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;