const router = require("express").Router();
const { createReservation, getAllRooms, getAllAvailableRooms, getAllReservedRooms, getRoomDetails, updateRoomReservation, getRoomID, removeHotelRoom, getRoomByUser, getRoomsOfHotelDate } = require('../apis/hotelRoomAPI')


router.route("/").post((req, res) => {

    const room = req.body;
    const addReservation = createReservation({ room }, res)
    // console.log(res)
})

router.route("/:hotelName").get((req, res) => {
    const hotel = req.params.hotelName;
    const roomsList = getAllRooms(hotel, res)
    // console.log(res)
})

router.route("/reserver/:reserverName").get((req, res) => {
    const reserverName = req.params.reserverName;
    const roomsList = getRoomByUser(reserverName, res)
    // console.log(res)
})

router.route("/:hotelName/available").get((req, res) => {
    const hotel = req.params.hotelName;
    const roomsList = getAllAvailableRooms(hotel, res)
    // console.log(res)
})

router.route("/:hotelName/reserved").get((req, res) => {
    const hotel = req.params.hotelName;
    const roomsList = getAllReservedRooms(hotel, res)
    // console.log(res)
})

router.route("/:hotelName/:room/:date").get((req, res) => {
    const hotel = req.params.hotelName;
    const roomNo = req.params.room;
    const date = req.params.date;
    const roomDetails = getRoomDetails(hotel, roomNo, date, res)
    // console.log(res)
})

router.route("/:hotelName/:room").get((req, res) => {
    const hotel = req.params.hotelName;
    const roomNo = req.params.room;
    const roomDetails = getRoomID(hotel, roomNo, res)
    // console.log(res)
})

router.route("/hotel/date/:hotelName/:date").get((req, res) => {
    const hotel = req.params.hotelName;
    const date = req.params.date;
    const roomDetails = getRoomsOfHotelDate(hotel, date, res)
    // console.log(res)
})

router.route("/:hotelName/:room").put(async (req, res) => {
    const hotel = req.params.hotelName;
    const roomNo = req.params.room;
    const room = req.body;

    const roomDetails = await updateRoomReservation(hotel, roomNo, { room }, res)

})

router.route("/:hotelName/:room").delete(async (req, res) => {
    const hotel = req.params.hotelName;
    const roomNo = req.params.room;

    const roomDetails = await removeHotelRoom(hotel, roomNo, res)


})
module.exports = router;
