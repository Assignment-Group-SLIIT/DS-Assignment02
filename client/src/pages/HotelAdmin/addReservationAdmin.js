import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { createRoomReservation } from '../../services/RoomReservationServices';
import { createAPayment, getPaymentDetails } from '../../services/PaymentService';
import successLogo from '../../assets/success.png'
import erroLogo from '../../assets/error.png'
import { getUser } from '../../utils/token';
import moment from 'moment';

const AddAdminReservation = () => {
    const user = getUser();
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(20)

    const [hotelName, setHotelName] = useState(user.hotelName);
    const [roomNo, setroomNo] = useState("");
    const [floor, setFloor] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [reservationStartDate, setReservationStartDate] = useState("");
    const [reservationEndDate, setReservationEndDate] = useState("");
    const [reservationPrice, setReservationPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [reserverName, setReserverName] = useState("");
    const [mustPayOnline, setMustPayOnline] = useState("");
    const [totalPayment, setTotalPayment] = useState("");

    //card details
    const [paymentAmnt, setPaymentAmnt] = useState(0);
    const [cardOwner, setCardOwner] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState(0);
    const [expiryYear, setExpiryYear] = useState(0);
    const [cvv, setCvv] = useState("");

    const [isSuccess, setIsSuccess] = useState(true)



    const increaseStepFunc = () => {
        if (step == 1) {
            setStep(2)
            setProgress(40)
        } else if (step == 2) {
            setStep(3)
            setProgress(60)
        } else if (step == 3) {
            setStep(4)
            setProgress(80)
        }
        else if (step == 4) {
            setStep(5)
            setProgress(100)
        }
    }

    const previouStepFunc = () => {
        setStep(1)
        setProgress(50)
        if (step == 2) {
            setStep(1)
            setProgress(25)
        } else if (step == 3) {
            setStep(2)
        }
    }

    function getDateDiff() {
        var startDate = moment(reservationStartDate).format('YYYY-MMMM-DD');
        var endDate = moment(reservationEndDate).format('YYYY-MMMM-DD');
        var getStartDate = moment(startDate, 'YYYY-MMMM-DD');
        var getEndDate = moment(endDate, 'YYYY-MMMM-DD');
        const diffDuration = getEndDate.diff(getStartDate, 'days');
        return (diffDuration);
    }



    const settlePayments = () => {
        setPaymentAmnt(reservationPrice * getDateDiff())
        setTotalPayment(reservationPrice * getDateDiff())
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        let mustPayOnlineBoolean = Boolean(mustPayOnline);

        let reservationData = {
            hotelName,
            roomNo,
            floor,
            type,
            status,
            reservationStartDate,
            reservationEndDate,
            reservationPrice,
            paymentStatus,
            reserverName,
            mustPayOnline: mustPayOnlineBoolean,
            totalPayment: reservationPrice * getDateDiff()
        }

        let paymentData = {
            cardNo: cardNumber,
            amount: reservationPrice * getDateDiff(),
            CVC: cvv,
            cardHolder: cardOwner,
            email,
            receriverNo: contactNo
        }


        let response = await createRoomReservation(reservationData);

        if (response.ok) {
            if (cardNumber && cvv && cardOwner) {
                let response = await createAPayment(paymentData);
                if (response.ok) {
                    setIsSuccess(true)
                    alert("You have completed reserving of a room successfully")
                    setStep(5)

                } else {
                    alert("somthing went wrong !! Check payment Details")
                }

            } else {
                alert("You successfully added a room for reservation")
            }


        } else {
            alert("somthing went wrong with reservation Details")
        }
    }





    return (
        <>
            <div className="content-body-admin-reservation ">
                {/* <div className="body"> */}
                <div className="addReservation-admin-container shadow">
                    <div className="mb-5">

                        <ProgressBar>
                            <ProgressBar striped animated variant="danger" now={progress} label={step == 1 ? "Step 1" : step == 2 ? "Step 2" : step == 3 ? "Step 3" : step == 4 ? "Step 4" : "Done"} key={1} />

                        </ProgressBar>

                    </div>
                    <h2 className='mb-5'>Reservation</h2>
                    {step === 1 &&
                        <div className='container step-container'>
                            <h5 className='mb-4'>Room Reservation</h5>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="first">Reserver Name </label>
                                        <input type="text" className="form-control" placeholder="" id="first" value={reserverName} onChange={(e) => { setReserverName(e.target.value) }} />
                                    </div>
                                </div>

                            </div>

                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="email">Email Address </label>
                                        <input type="email" className="form-control" placeholder="" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label for="contactno">Contact No </label>
                                        <input type="number" className="form-control" placeholder="" id="contactno" value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                                    </div>
                                </div>

                            </div>

                            <div className="row mb-2">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="first">Hotel Name</label>
                                        <input type="text" className="form-control" placeholder="" id="first" value={hotelName} onChange={(e) => { setHotelName(e.target.value) }} disabled />
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
                            <div className="row mb-1">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="first">Room Price</label>
                                        <input type="text" className="form-control" placeholder="" id="first" value={reservationPrice}
                                            onChange={(e) => {
                                                setReservationPrice(e.target.value);
                                                settlePayments()
                                            }} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="last">Total Reserved Price</label>
                                        <input type="text" className="form-control" placeholder="" id="last"
                                            value={reservationPrice * getDateDiff()}
                                            disabled
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
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { increaseStepFunc() }}>Next</button>
                            </div>
                        </div>


                    }

                    {step === 2 &&
                        <div className='container step-container'>
                            <h5 className='mb-5'>Card details</h5>
                            <div class="row mb-2">
                                <div class="col-lg-12">
                                    {/* <!-- credit card info--> */}
                                    <div id="credit-card">
                                        <div class="form-group">
                                            <label>Payment amount</label>
                                            <h2>{reservationPrice * getDateDiff()}</h2>
                                        </div>
                                        <div class="form-group"> <label for="cardOwner">
                                            <h6>Card Owner</h6>
                                        </label>
                                            <input type="text" name="cardOwner" placeholder="Card Owner Name" required class="form-control " value={cardOwner} onChange={(e) => { setCardOwner(e.target.value) }} /> </div>
                                        <div class="form-group"> <label for="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                            <div class="input-group">
                                                <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                                    <div class="input-group">
                                                        <input type="number" placeholder="MM" name="" class="form-control" required value={expiryMonth} onChange={(e) => { setExpiryMonth(e.target.value) }} />
                                                        <input type="number" placeholder="YY" name="" class="form-control" required value={expiryYear} onChange={(e) => { setExpiryYear(e.target.value) }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                    <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                </label>
                                                    <input type="text" required class="form-control" value={cvv} onChange={(e) => { setCvv(e.target.value) }} /> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="buttongroup mb-3">
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { previouStepFunc() }}>Previous</button>
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { increaseStepFunc() }}>Next</button>
                            </div>
                        </div>


                    }
                    {step === 3 && (
                        <div className="container step-container-step03">
                            <h5 className='mb-2'>Review</h5>
                            <div className="row mb-2">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <strong for="first">Reserver Name</strong>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label for="company">{reserverName}</label>
                                    </div>
                                </div>

                            </div>
                            <div className='add-reservation-admin-boxes'>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Hotel Name</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{hotelName}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="last">Room Number</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{roomNo}</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="company">Floor</strong>
                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{floor}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="phone">Room Type</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{type}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Status</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{status}</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Reservation from</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{reservationStartDate}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Reservation to</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{reservationEndDate}</label>
                                        </div>
                                    </div>
                                </div>

                                <hr ></hr>

                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Room Price</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{reservationPrice}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Payment Status</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{paymentStatus}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Payment Method</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{mustPayOnline}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Total Payment</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{reservationPrice * getDateDiff()}</label>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="buttongroup">
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { previouStepFunc() }}>Previous</button>
                                <button class="btn btn-primary w-25 rounded-pill" onClick={() => { increaseStepFunc() }}>Next</button>
                            </div>


                        </div>
                    )}
                    {
                        step === 4 &&
                        (
                            <div className="container step-container-step03 ">
                                <h5 className='mb-5'>Card Details Summary</h5>
                                <div className='add-reservation-admin-boxes'>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <strong for="first">Card Number</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label for="company">{cardNumber}</label>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <strong for="first">Card holder</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label for="company">{cardOwner}</label>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <strong for="last">Expires</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label for="company">{expiryMonth}/{expiryYear}</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mt-3 mb-4'>
                                        <div className="payment-card">
                                            <div className='card'>
                                                <div className="card__front card__part">
                                                    <p className="card_numer">**** **** **** 6258</p>
                                                    <div className="card__space-75">
                                                        <span className="card__label">Card holder</span>
                                                        <p className="card__info">{cardOwner}</p>
                                                    </div>
                                                    <div className="card__space-25">
                                                        <span className="card__label">Expires</span>
                                                        <p className="card__info">{expiryMonth}/{expiryYear}</p>
                                                    </div>
                                                </div>

                                                <div className="card__back card__part">
                                                    <div className="card__black-line"></div>
                                                    <div className="card__back-content">
                                                        <div className="card__secret">
                                                            <p className="card__secret--last">420</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttongroup mt-5 mb-3">
                                        <button class="btn btn-primary w-25 rounded-pill" onClick={() => { previouStepFunc() }}>Previous</button>
                                        <button class="btn btn-primary w-25 rounded-pill" onClick={(e) => { onSubmit(e) }}>Submit</button>
                                    </div>
                                </div>
                            </div>)
                    }
                    {step == 5 &&
                        <div className="container step-container step-four">
                            {isSuccess ? (
                                <>
                                    <img src={successLogo} width={200} height={200} alt='success logo' />
                                    <h4>Your reservation has been added successfully!</h4>
                                </>

                            ) :
                                (
                                    <>
                                        <img src={erroLogo} width={200} height={200} alt='error logo' />
                                        <h4>There is an error with your request. Please try again later.</h4>
                                    </>
                                )}
                        </div>
                    }
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default AddAdminReservation