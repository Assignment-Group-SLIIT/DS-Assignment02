let TaxiReservation = require("../models/Taxi");
let moment = require("moment")

const reserveTaxi = ({ reservation }, res) => {

    const user = reservation.user;
    const type = reservation.type;
    const distance = reservation.distance;
    const amount = reservation.amount;
    const paymentStatus = reservation.paymentStatus;
    const date = moment(reservation.date).format('YYYY-MM-DD');

    const TaxiReservations = new TaxiReservation({
        user: user,
        type: type,
        distance: distance,
        amount: amount,
        paymentStatus: paymentStatus,
        date: date
    })

    TaxiReservations.save().then(() => {
        return res.status(200).send({ message: "Your Reservation is successful" })
    }).catch((err) => {
        return res.status(300).send({ status: "Could not make a taxi reservation", error: err.message });
    })

}


const searchTaxiDetails = async (user, date, res) => {
    await TaxiReservation.find({
        user: user,
        date: date,
    }).then((taxiRes) => {
        return res.json(taxiRes)

    }).catch((err) => {
        // console.log(err);
        return res.status(300).send({ status: "No such taxi reservation", error: err.message });
    })
}


const searchAllTaxiDetailsofUser = async (user, res) => {
    await TaxiReservation.find({
        user: user,
    }).then((taxiRes) => {
        return res.json(taxiRes)

    }).catch((err) => {
        // console.log(err);
        return res.status(300).send({ status: "No such taxi reservation", error: err.message });
    })
}

const updateTaxiReservation = async (user, date, { reservation }, res) => {

    const updateTaxiReservation = {
        user: reservation.user,
        type: reservation.type,
        distance: reservation.distance,
        amount: reservation.amount,
        paymentStatus: reservation.paymentStatus,
        date: reservation.date
    }


    const update = await TaxiReservation.findOneAndUpdate({ user: user, date: date }, updateTaxiReservation)
        .then(() => {
            return res.status(200).send({ status: "Reservation Details updated" })//sending details of the updated data back to front end
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ status: "Error with updating data of an Reservation", error: err.message });
        })


    // console.log("method called")
}

const cancelReservation = async (user, date, res) => {
    await TaxiReservation.findOneAndDelete({ user: user, date: date })
        .then(() => {
            res.status(200).send({ status: "Taxi Reservation Successfully Cancelled" });
        }).catch(() => {
            console.log(err);
            res.status(500).send({ status: "Error on Cancelling the Taxi Reservation", error: err.message });
        })
}

module.exports = { reserveTaxi, searchTaxiDetails, updateTaxiReservation, cancelReservation, searchAllTaxiDetailsofUser }