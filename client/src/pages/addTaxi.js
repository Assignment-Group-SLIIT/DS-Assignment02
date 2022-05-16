import { useState } from "react";
import moment from 'moment';
import { createTaxiReservation } from "../services/TaxiServices";
import { useNavigate } from "react-router-dom";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Swal from 'sweetalert2'

const AddTaxiReservation = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [amount, setAmount] = useState(0);
    const [paymentStatus, setPaymentStatus] = useState("");
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));


    const taxiReserve = (e) => {
        e.preventDefault();
        if (!user || !type || !distance || !date) {
            Swal.fire({
                icon: 'warning',
                title: 'Required',
                text: 'Please fill the required fileds',
                confirmButtonColor: '#F7444E',
            })
        } else {
            const taxiPayload = {
                user,
                type,
                distance,
                amount: distance * 1000,
                paymentStatus: 'Pending',
                date
            }
            createTaxiReservation(taxiPayload).then((response) => {
                console.log(response)
                if (response.ok) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Taxi Reserved !!!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        navigate('/userProfile')
                    })

                    // window.location.reload();
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Required',
                        text: 'Something went wrong!!!',
                        confirmButtonColor: '#F7444E',
                    })
                }
            }).catch((error) => {
                console.log(error)
                Swal.fire({
                    icon: 'warning',
                    title: 'Required',
                    text: 'Something went wrong!!!',
                    confirmButtonColor: '#F7444E',
                })
            })
        }
    }

    const calculate = () => {
        setAmount(distance * 1000)
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
                                                <option  >Choose Type</option>
                                                <option id="car" >Car</option>
                                                <option id="van">Van</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="distance">Distance</label>
                                            <input type="number"
                                                className="form-control"
                                                id="distance"
                                                placeholder="km"
                                                value={distance}
                                                onChange={(e) => {
                                                    setDistance(e.target.value)
                                                    calculate()
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
                                                value={distance * 1000}
                                                onChange={(e) => {
                                                    setAmount(e.target.value)
                                                }} />
                                        </div>
                                    </div>

                                    {/* <div className="col-md-6">
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
                                    </div> */}

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