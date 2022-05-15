import { useState } from "react";
import moment from 'moment';
import { createTaxiReservation } from "../services/TaxiServices";
import { useNavigate } from "react-router-dom";

const AddTaxiReservation = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

    const taxiReserve = (e) => {
        e.preventDefault();
        const taxiPayload = {
            user,
            type,
            distance,
            amount,
            paymentStatus,
            date
        }
        createTaxiReservation(taxiPayload).then((response) => {
            console.log(response)
            if (response.ok) {
                alert("Taxi Reserved")
                navigate('/userProfile')
                // window.location.reload();
            } else {
                console.log(response)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="content-body">
                <div className="body">
                    <div className="addReservation-container shadow">
                        <div className="container step-container">
                            <h2 className='mb-5'>Taxi Reservation Details</h2>
                            <form onSubmit={taxiReserve}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label class="form-label" for="user" >Customer name :</label>
                                            <input
                                                required
                                                id="user"
                                                type="text"
                                                className="form-control "
                                                placeholder="Customer Name"
                                                value={user}
                                                onChange={(e) => {
                                                    setUser(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="date">Reserve Date</label>
                                            <input type="date"
                                                className="form-control"
                                                id="fromdate"
                                                placeholder="Reserve Date"
                                                value={date}
                                                onChange={(e) => {
                                                    setDate(e.target.value)
                                                }} />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="type" class="form-label-emp">Vehicle Type</label>
                                            <select class="form-select form-control"
                                                name="type"
                                                id="type"
                                                required
                                                value={type}
                                                onChange={(e) => {
                                                    setType(e.target.value);
                                                }}
                                            >
                                                <option id="car" >Car</option>
                                                <option id="van">Van</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="distance">Distance</label>
                                            <input type="text"
                                                className="form-control"
                                                id="distance"
                                                placeholder="Distance"
                                                value={distance}
                                                onChange={(e) => {
                                                    setDistance(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="payment">Payment</label>
                                            <input type="text"
                                                className="form-control"
                                                id="payment"
                                                placeholder="Payment"
                                                value={amount}
                                                onChange={(e) => {
                                                    setAmount(e.target.value)
                                                }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Payment Status</label>
                                            <select class="form-select form-control"
                                                name="type" id="type" required

                                                value={paymentStatus}
                                                onChange={(e) => {
                                                    setPaymentStatus(e.target.value);
                                                }}
                                            >
                                                <option id="pending">Pending</option>
                                                <option id="completed" >Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col py-3 text-center">
                                        {/* <Link to="/viewHotel"> */}
                                        <button type="submit" className="btn btn-ok" >RESERVE TAXI </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddTaxiReservation;