import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const AddAdminReservation = () => {
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)

    const [hotelName, setHotelName] = useState("");
    const [roomNo, setroomNo] = useState("");
    const [floor, setFloor] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [reservationStartDate, setReservationStartDate] = useState("");
    const [reservationEndDate, setReservationEndDate] = useState("");
    const [reservationPrice, setReservationPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [reserverName, setReserverName] = useState("");
    const [mustPayOnline, setMustPayOnline] = useState("");
    const [totalPayment, setTotalPayment] = useState("");

    const increaseStepFunc = () => {
        setStep(2)
        setProgress(100)

    }

    const previouStepFunc = () => {
        setStep(1)
        setProgress(50)

    }



    return (
        <>
            <div className="content-body">
                <div className="addReservation-container shadow">
                    <div className="mb-5">
                        {/* <div class="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{progress}%</div> */}



                        <ProgressBar>
                            <ProgressBar striped animated now={50} key={1} />
                            <ProgressBar striped animated variant="info" now={step == 1 ? 0 : step == 2 ? 50 : null} key={2} />
                        </ProgressBar>


                        {/* <ProgressBar striped now={35} key={1} />
                            <ProgressBar striped variant="info" now={20} key={2} />
                            <ProgressBar striped variant="danger" now={10} key={3} /> */}

                    </div>
                    <h2 className='mb-5'>Reservation</h2>
                    {step === 1 &&
                        <div className='container step-container'>
                            <h5 className='mb-5'>Add Reservation</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="first">Hotel Name</label>
                                        <input type="text" className="form-control" placeholder="" id="first" value={hotelName} onChange={(e) => { setHotelName(e.target.value) }} />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="last">Room Number</label>
                                        <input type="text" className="form-control" placeholder="" id="last" value={roomNo} onChange={(e) => { setroomNo(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="last">Floor</label>
                                        <input type="text" className="form-control" placeholder="" id="last" value={floor} onChange={(e) => { setFloor(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" >
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
                                <div class="col-6" >
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
                            <div class="row">


                                <div class="col-6 "  >
                                    <label for="reservationStartDate" class="form-label-emp">Reservation From</label>
                                    <input type="date" required id="reservationStartDate" className="form-control"
                                        name="reservationStartDate"
                                        value={reservationStartDate}
                                        onChange={(e) => {
                                            setReservationStartDate(e.target.value);
                                        }}
                                    />
                                </div>

                                <div class="col-6"  >
                                    <label for="reservationEndDate" class="form-label-emp">Reservation To</label>
                                    <input type="date" required id="reservationEndDate" className="form-control"
                                        name="reservationEndDate"
                                        value={reservationEndDate}
                                        onChange={(e) => {
                                            setReservationEndDate(e.target.value);
                                            // totPayment()
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="buttongroup">
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { increaseStepFunc() }}>Next</button>
                            </div>
                        </div>


                    }
                    {step === 2 &&
                        <div className='container step-container'>
                            <h2 className='mb-5'>Reservation Details</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="first">Room Price</label>
                                        <input type="text" className="form-control" placeholder="" id="first" value={reservationPrice}
                                            onChange={(e) => {
                                                setReservationPrice(e.target.value);
                                            }} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="last">Total Reserved Price</label>
                                        <input type="text" className="form-control" placeholder="" id="last"
                                            value={totalPayment}
                                            onChange={(e) => {
                                                setTotalPayment(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div class="row pb-3">
                                <div class="col-6" >
                                    <label for="type" class="form-label-emp">Room Type</label>
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
                                <div class="col-6" >
                                    <label for="status" class="form-label-emp">Status</label>
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

                            <div className="buttongroup">
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { previouStepFunc() }}>Previous</button>
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { increaseStepFunc() }}>Next</button>
                            </div>
                        </div>


                    }
                </div>
            </div>
        </>
    )
}

export default AddAdminReservation