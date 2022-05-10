let HotelRoom = require("../models/HotelRoom");
let moment = require("moment")
const createReservation = ({ room }, res) => {

    const hotelName = room.hotelName;
    const roomNo = room.roomNo;
    const floor = room.floor;
    const type = room.type;
    const status = room.status;
    const reservationStartDate = moment(room.reservationStartDate).format('YYYY-MM-DD');
    const reservationEndDate = moment(room.reservationEndDate).format('YYYY-MM-DD');
    const reservationPrice = Number(room.reservationPrice);
    const paymentStatus = room.paymentStatus;
    const reserverName = room.reserverName;
    const mustPayOnline = room.mustPayOnline;
    const totalPayment = Number(room.totalPayment);


    const newReservation = new HotelRoom({
        hotelName: hotelName,
        roomNo: roomNo,
        floor: floor,
        type: type,
        status: status,
        reservationStartDate: moment(reservationStartDate).format('YYYY-MM-DD'),
        reservationEndDate: moment(reservationEndDate).format('YYYY-MM-DD'),
        reservationPrice: reservationPrice,
        paymentStatus: paymentStatus,
        reserverName: reserverName,
        mustPayOnline: mustPayOnline,
        totalPayment: totalPayment
    })

    newReservation.save().then(() => {
        return res.status(200).send({ message: "New Reservation is added" })
    }).catch((err) => {
        return res.status(300).send({ status: "Cannot add new reservation", error: err.message });
    })

}


const getAllRooms = (hotel, res) => {
    HotelRoom.find({ hotelName: { $regex: "^" + hotel + ".*", $options: 'i' } }).then((rooms) => {
        return res.json(rooms)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}

const getAllAvailableRooms = (hotel, res) => {
    HotelRoom.find({
        hotelName: { $regex: "^" + hotel + ".*", $options: 'i' },
        status: "Available"

    }).then((rooms) => {
        return res.json(rooms)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}

const getAllReservedRooms = (hotel, res) => {
    HotelRoom.find({
        hotelName: { $regex: "^" + hotel + ".*", $options: 'i' },
        status: "Reserved"

    }).then((rooms) => {
        return res.json(rooms)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}


const getRoomDetails = (hotel, roomNo, date, res) => {
    HotelRoom.find({
        hotelName: { $regex: "^" + hotel + ".*", $options: 'i' },
        roomNo: roomNo,
        reservationStartDate: date

    }).then((room) => {
        return res.json(room)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}

const getRoomsOfHotelDate = (hotel, date, res) => {

    HotelRoom.find({
        hotelName: { $regex: "^" + hotel + ".*", $options: 'i' },
        reservationStartDate: date,

    }).then((rooms) => {
        return res.json(rooms)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}

const getRoomID = async (hotel, roomNo, res) => {
    await HotelRoom.findOne({
        hotelName: hotel,
        roomNo: roomNo,
    }).then((room) => {
        // console.log(room._id)
        return res.json(room._id)

    }).catch((err) => {
        console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}


const getRoomByUser = async (reserverName, res) => {
    await HotelRoom.find({
        reserverName: reserverName,
    }).then((room) => {
        // console.log(room._id)
        return res.json(room)

    }).catch((err) => {
        // console.log(err);
        return res.status(300).send({ status: "Cannot get the room details", error: err.message });
    })
}

const updateRoomReservation = async (hotel, roomNo, { room }, res) => {

    const updateReservation = {
        hotelName: room.hotelName,
        roomNo: room.roomNo,
        floor: room.floor,
        type: room.type,
        status: room.status,
        reservationStartDate: room.reservationStartDate,
        reservationEndDate: room.reservationEndDate,
        reservationPrice: room.reservationPrice,
        paymentStatus: room.paymentStatus,
        reserverName: room.reserverName,
        mustPayOnline: room.mustPayOnline,
        totalPayment: room.totalPayment
    }


    const update = await HotelRoom.findOneAndUpdate({ hotelName: hotel, roomNo: roomNo }, updateReservation)
        .then(() => {
            return res.status(200).send({ status: "Reservation Details updated" })//sending details of the updated data back to front end
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ status: "Error with updating data of an Reservation", error: err.message });
        })


    // console.log("method called")
}

const removeHotelRoom = async (hotel, roomNo, res) => {
    await HotelRoom.findOneAndDelete({ hotelName: hotel, roomNo: roomNo })
        .then(() => {
            res.status(200).send({ status: "Room Record deleted" });
        }).catch(() => {
            console.log(err);
            res.status(500).send({ status: "Error with deleting room record", error: err.message });
        })
}

module.exports = { createReservation, getAllRooms, getAllAvailableRooms, getAllReservedRooms, getRoomDetails, updateRoomReservation, getRoomID, removeHotelRoom, getRoomByUser, getRoomsOfHotelDate }