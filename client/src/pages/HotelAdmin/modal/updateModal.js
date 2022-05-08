import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment'
import { updateRoomReservationDetails } from "../../../services/RoomReservationServices";



function UpdateReservation(reservation) {

    useEffect(() => {
        try {
            setRetrievedValues();

        } catch (error) {
            console.log(error)
        }
    }, [])

    const setRetrievedValues = () => {
        setHotelName(reservation.data.hotelName);
        setRoomNo(reservation.data.roomNo);
        setFloor(reservation.data.floor)
        setType(reservation.data.type)
        setStatus(reservation.data.status)
        setReservationStartDate(moment(reservation.data.reservationStartDate).format("YYYY-MM-DD"))
        setReservationEndDate(reservation.data.reservationEndDate)
        setReservationPrice(reservation.data.reservationPrice)
        setPaymentStatus(reservation.data.paymentStatus)
        setReserverName(reservation.data.reserverName)
        setMustPayOnline(reservation.data.mustPayOnline)

    }

    const [hName, setHotelName] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [floor, setFloor] = useState("");
    const [type, setType] = useState("");
    const [reservationStartDate, setReservationStartDate] = useState('');
    const [reservationEndDate, setReservationEndDate] = useState("");
    const [reservationPrice, setReservationPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [reserverName, setReserverName] = useState("");
    const [status, setStatus] = useState("");
    const [mustPayOnline, setMustPayOnline] = useState("");
    const [priorPay, setPriorPay] = useState(false);

    // console.log(reservationStartDate)

    const sendData = (e) => {
        e.preventDefault();

        if (mustPayOnline == 'true') {
            setPriorPay(true)
        }

        const updatedReservation = {
            hName,
            roomNo,
            floor,
            type,
            status,
            reservationStartDate,
            reservationEndDate,
            reservationPrice,
            paymentStatus,
            reserverName,
            mustPayOnline: priorPay
        }

        updateRoomReservationDetails(hName, roomNo, updatedReservation).
            then((response) => {
                if (response.ok) {
                    alert("Successfully Updated the Room Reservation Details")
                    window.location.reload();
                } else {
                    console.log(response)
                }
            }).catch((error) => {
                console.error(error)
            })
    }

    return (

        <div className="content-body">

            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form id="reservation updateForm" action="post" className="form" onSubmit={(e) => sendData(e)}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Reservation Details</h3>
                                    <hr></hr>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-md-6">
                                    <label class="form-label" for="cName">Customer name :</label>
                                    <input
                                        required
                                        id="cName"
                                        type="text"
                                        className="form-control "
                                        value={reserverName}
                                        // disabled
                                        onChange={(e) => {
                                            setReserverName(e.target.value);
                                        }}
                                    />

                                </div>
                            </div>


                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="roomReserve">Reservation Hotel Details </label>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4">
                                            <label for="hName" class="form-label-emp">Hotel Name</label>
                                            <input
                                                required
                                                id="hName"
                                                type="text"
                                                className="form-control "
                                                value={hName}
                                                disabled
                                                onChange={(e) => {
                                                    setHotelName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div class="col-4 mr-2"  >
                                            <label for="roomNo" class="form-label-emp">Room No</label>
                                            <input
                                                required
                                                id="roomNo"
                                                type="text"
                                                className="form-control "
                                                value={roomNo}
                                                disabled
                                                onChange={(e) => {
                                                    setRoomNo(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div class="col-4" >
                                            <label for="floor" class="form-label-emp">Floor</label>
                                            <input
                                                required
                                                id="floor"
                                                type="text"
                                                className="form-control "
                                                value={floor}
                                                disabled
                                                onChange={(e) => {
                                                    setFloor(e.target.value);
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4" >
                                            <label for="type" class="form-label-emp">Room Type</label>
                                            <select class="form-select form-control"
                                                name="type" id="type" required
                                                value={type}
                                                onChange={(e) => {
                                                    setType(e.target.value);
                                                }}
                                            >
                                                <option id="Single" >Single</option>
                                                <option id="Double">Double</option>
                                                <option id="Family" >Family</option>
                                                <option id="Luxuary" >Luxuary</option>
                                            </select>

                                        </div>
                                        <div class="col-4" >
                                            <label for="status" class="form-label-emp">Status</label>
                                            <select class="form-select form-control"
                                                name="status" id="status" required
                                                value={status}
                                                onChange={(e) => {
                                                    setStatus(e.target.value);
                                                }}
                                            >
                                                <option id="Available" >Available</option>
                                                <option id="Reserved">Reserved</option>
                                            </select>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4 mr-2"  >
                                            <label for="reservationStartDate" class="form-label-emp">Reservation From</label>
                                            <input type="date" required id="reservationStartDate"
                                                name="reservationStartDate"
                                                value={reservationStartDate}
                                                onChange={(e) => {
                                                    setReservationStartDate(e.target.value);
                                                }}
                                            />
                                        </div>

                                        <div class="col-4 mr-2"  >
                                            <label for="reservationEndDate" class="form-label-emp">Reservation To</label>
                                            <input type="date" required id="reservationEndDate"
                                                name="reservationEndDate"
                                                value={reservationEndDate}
                                                onChange={(e) => { setReservationEndDate(e.target.value); }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-4 ">
                                            <label class="form-label-emp" for="reservationPrice">Room Price</label>
                                            <input

                                                id="reservationPrice"
                                                type="number"
                                                className="form-control "
                                                placeholder="0"
                                                value={reservationPrice}
                                                onChange={(e) => {
                                                    setReservationPrice(e.target.value);
                                                }}

                                            />
                                        </div>

                                        <div className="form-group col-md-4 ">
                                            <label class="form-label-emp" for="paymentStatus">Payment Status</label>
                                            <select class="form-select form-control"
                                                name="paymentStatus" id="paymentStatus" required
                                                value={paymentStatus}
                                                onChange={(e) => {
                                                    setPaymentStatus(e.target.value);
                                                }}
                                            >
                                                <option id="Completed" >Completed</option>
                                                <option id="Pending">Pending</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4 ">
                                            <label class="form-label-emp" for="mustPayOnline">Require prior payments</label>
                                            <select class="form-select form-control"
                                                name="mustPayOnline" id="mustPayOnline" required
                                                value={mustPayOnline}
                                                onChange={(e) => {
                                                    setMustPayOnline(e.target.value);
                                                }}
                                            >
                                                <option id='true' >True</option>
                                                <option id='false'>False</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">UPDATE</button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={reservation.onHide}> CANCEL</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default UpdateReservation;