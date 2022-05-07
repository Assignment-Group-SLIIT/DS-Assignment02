let Payment = require("../models/Payment");
let moment = require("moment")

const makePayment = ({ payment }, res) => {

    const cardNo = payment.cardNo;
    const amount = payment.amount;
    const CVC = payment.CVC;
    const cardHolder = payment.cardHolder;
    const date = moment(new Date()).format('YYYY-MM-DD');

    const newPayment = new Payment({
        cardNo: cardNo,
        amount: amount,
        CVC: CVC,
        cardHolder: cardHolder,
        date: date
    })

    newPayment.save().then(() => {
        return res.status(200).send({ message: "Your Payment is successful" })
    }).catch((err) => {
        return res.status(300).send({ status: "Could not make the paymnet", error: err.message });
    })

}


const searchPaymentDetails = async (cardHolder, date, res) => {
    await Payment.find({
        cardHolder: cardHolder,
        date: date,
    }).then((payment) => {
        return res.json(payment)

    }).catch((err) => {
        // console.log(err);
        return res.status(300).send({ status: "No such payment being made", error: err.message });
    })
}

module.exports = { makePayment, searchPaymentDetails }