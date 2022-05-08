const { reserveTaxi, searchTaxiDetails, updateTaxiReservation, cancelReservation, searchAllTaxiDetailsofUser } = require("../apis/taxiAPI");

const router = require("express").Router();

router.route("/").post((req, res) => {

    const reservation = req.body;
    const createReservation = reserveTaxi({ reservation }, res)
    // console.log(res)
})

router.route("/:user").get((req, res) => {
    const user = req.params.user;
    const reservationDet = searchAllTaxiDetailsofUser(user, res)
})

router.route("/:user/:date").get((req, res) => {
    const user = req.params.user;
    const date = req.params.date;
    const reservationDet = searchTaxiDetails(user, date, res)
})

router.route("/:user/:date").put(async (req, res) => {
    const user = req.params.user;
    const date = req.params.date;
    const reservation = req.body;

    const taxiResUpdate = await updateTaxiReservation(user, date, { reservation }, res)

})

router.route("/:user/:date").delete(async (req, res) => {
    const user = req.params.user;
    const date = req.params.date;

    const taxiResDelete = await cancelReservation(user, date, res)

})


module.exports = router;
