import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment'


function UpdateReservation(reservation) {

    // console.log(reservation)
    // const { hotelName } = useParams();

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
        setReservationStartDate(reservation.data.reservationStartDate)
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
    const [reservationStartDate, setReservationStartDate] = useState("");
    const [reservationEndDate, setReservationEndDate] = useState("");
    const [reservationPrice, setReservationPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [reserverName, setReserverName] = useState("");
    const [status, setStatus] = useState("");
    const [mustPayOnline, setMustPayOnline] = useState("");

    return (

        <div className="content-body">

            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form >
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Reservation Details</h3>
                                    <hr></hr>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="customer">Customer Details :</label>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="cName">Customer name :</label>
                                            <input
                                                required
                                                id="cName"
                                                type="text"
                                                className="form-control "
                                                value={reserverName}
                                                disabled
                                                onChange={(e) => {
                                                    setReserverName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="Vehicle">Reservation Hotel Details </label>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4">
                                            <label for="rStatus" class="form-label-emp">Hotel Name</label>
                                            <input
                                                required
                                                id="cName"
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
                                            <label for="rFrom" class="form-label-emp">Room No</label>
                                            <input
                                                required
                                                id="cName"
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
                                            <label for="rTo" class="form-label-emp">Floor</label>
                                            <input
                                                required
                                                id="cName"
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
                                            <label for="rTo" class="form-label-emp">Type</label>
                                            <input
                                                required
                                                id="cName"
                                                type="text"
                                                className="form-control "
                                                value={type}
                                                disabled
                                                onChange={(e) => {
                                                    setType(e.target.value);
                                                }}
                                            />

                                        </div>
                                        <div class="col-4" >
                                            <label for="rTo" class="form-label-emp">Status</label>
                                            <select class="form-select form-control"
                                                name="rStatus" id="rStatus" required
                                                value={status}
                                                onChange={(e) => {
                                                    setStatus(e.target.value);
                                                    // UpdatedPenaltyDays();
                                                    // UpdatedRemainder();
                                                }}
                                            >
                                                <option id="pending" >Available</option>
                                                <option id="completed">Reserved</option>
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
                                            <label for="returnDate" class="form-label-emp">Reservation From</label>
                                            <input type="date" required id="returnDate"
                                                name="returnDate"
                                                value={reservationStartDate}
                                                onChange={(e) => { setReservationStartDate(e); }}
                                            // timeFormat={false}
                                            // isValidDate={disablePastDt}
                                            // onClose={calculateCharges}
                                            />
                                        </div>

                                        <div class="col-4 mr-2"  >
                                            <label for="vehicle" class="form-label-emp">Reservation To</label>
                                            <input type="date" required id="rto"
                                                name="rto"
                                                value={reservationEndDate}
                                                onChange={(e) => { setReservationEndDate(e); }}
                                            // timeFormat={false}
                                            // readonly="readonly"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="penaltyDays">Payment</label>
                                            <input

                                                id="penaltyDays"
                                                type="number"
                                                className="form-control "
                                                placeholder="0"
                                                value={reservationPrice}
                                                onChange={(e) => {
                                                    setReservationPrice(e.target.value);
                                                    //calculateCharges();
                                                }}

                                            />
                                        </div>

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="penaltyCharges">Payment Status</label>
                                            <select class="form-select form-control"
                                                name="rStatus" id="rStatus" required
                                            // value={paymentStatus}
                                            // onChange={(e) => {
                                            //     setPaymentStatus(e.target.value);
                                            //     UpdatedPenaltyDays();
                                            //     UpdatedRemainder();
                                            //}}
                                            >
                                                <option id="pending" >Completed</option>
                                                <option id="completed">Pending</option>
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
                                    <button type="reset" className="btn btn-reset"> CANCEL</button>
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