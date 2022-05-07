const router = require("express").Router();
const { makePayment, searchPaymentDetails } = require("../apis/paymentAPI");

router.route("/").post((req, res) => {

    const payment = req.body;
    const createPayment = makePayment({ payment }, res)
    // console.log(res)
})

router.route("/:cardHolder/:date").get((req, res) => {
    const cardHolder = req.params.cardHolder;
    const date = req.params.date;
    const paymentDetails = searchPaymentDetails(cardHolder, date, res)
})

module.exports = router;
