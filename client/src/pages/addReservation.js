import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { createAPayment } from '../services/PaymentService';
import { updateRoomReservationDetails } from '../services/RoomReservationServices';
import successLogo from '../assets/success.png'
import erroLogo from '../assets/error.png'

const AddReservation = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)
    const location = useLocation();


    //step one
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [dateFrom, setDateFrom] = useState(moment().format("YYYY-MM-DD"));
    const [dateTo, setDateTo] = useState(moment().format("YYYY-MM-DD"));

    //step two
    const [paymentAmnt, setPaymentAmnt] = useState("");
    const [cardOwner, setCardOwner] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState(0);
    const [expiryYear, setExpiryYear] = useState(0);
    const [cvv, setCvv] = useState("");
    let payment = '';

    //retrieve reserving hotel room data
    const [reservationRoom, setReservationRoom] = useState()
    const [paymentStatus, setPaymentStatus] = useState('Pending')
    const [isSuccess, setIsSuccess] = useState(true)

    const increaseStepFunc = () => {
        if (reservationRoom.mustPayOnline == true && step == 2
            && cardNumber && cardOwner && cvv && expiryYear && expiryMonth) {
            setStep(step + 1)
        } else if (reservationRoom.mustPayOnline == true && step == 2) {
            alert('You cannot proceed this reservation requires prior payment')
        } else if (step == 1 || step == 3) {
            setStep(step + 1)
        }

    }
    const decreaseStepFunc = () => {
        setStep(step - 1)
    }

    useEffect(() => {
        switch (step) {
            case 1:
                setProgress(0)
                break;
            case 2:
                setProgress(30)
                break;
            case 3:
                setProgress(75)
                break;
            case 4:
                setProgress(100)
                break;

            default:
                break;
        }
    }, [step]);

    const addReservationFunc = () => {
        setProgress(100);
    }


    useEffect(() => {

        setReservationRoom(location?.state?.reservation)


    }, [])





    const makeReservation = (e) => {
        e.preventDefault();
        if (reservationRoom.mustPayOnline == true) {
            payment = 'Completed'
        } else {
            payment = 'Pending'
        }


        const reservationObject = {
            hotelName: reservationRoom.hotelName,
            roomNo: reservationRoom.roomNo,
            floor: reservationRoom.floor,
            type: reservationRoom.type,
            status: "Reserved",
            reservationStartDate: dateFrom,
            reservationEndDate: dateTo,
            reservationPrice: reservationRoom.reservationPrice,
            paymentStatus: payment,
            reserverName: firstName,
            mustPayOnline: reservationRoom.mustPayOnline,
            totalPayment: reservationRoom.reservationPrice * getDateDiff()
        }

        const paymentObject = {
            cardNo: cardNumber,
            amount: reservationRoom.reservationPrice * getDateDiff(),
            CVC: cvv,
            cardHolder: cardOwner,
            email,
            receriverNo: contactNo
        }


        updateRoomReservationDetails(reservationRoom.hotelName, reservationRoom.roomNo, reservationObject)
            .then((response) => {
                if (response.ok) {
                    createAPayment(paymentObject)
                        .then((response) => {
                            if (response.ok) {
                                setIsSuccess(true)
                                alert("You have completed reserving of a room successfully")
                            }
                        })
                }
            }).catch((err) => {
                console.log(err)
                setIsSuccess(false)
                alert("Cannot continue system generates an error")
            })

    }

    function getDateDiff() {
        var startDate = moment(dateFrom).format('YYYY-MMMM-DD');
        var endDate = moment(dateTo).format('YYYY-MMMM-DD');
        var getStartDate = moment(startDate, 'YYYY-MMMM-DD');
        var getEndDate = moment(endDate, 'YYYY-MMMM-DD');
        const diffDuration = getEndDate.diff(getStartDate, 'days');
        return (diffDuration);
    }


    return (
        <>
            <div className="content-body">
                <div className="body">
                    <div className="addReservation-container shadow">
                        <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{progress}%</div>
                        </div>
                        {step === 1 && (
                            <div className="container step-container">
                                <h2 className='mb-5'>Reservation Details</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="first">First Name</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="last">Last Name</label>
                                            <input type="text" className="form-control" placeholder="" id="last" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="company">Email</label>
                                            <input type="email" className="form-control" placeholder="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>


                                    </div>

                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label for="phone">Phone Number</label>
                                            <input type="tel" className="form-control" id="phone" placeholder="phone" value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation from</label>
                                            <input type="date" className="form-control" id="fromdate" placeholder="from" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation to</label>
                                            <input type="date" className="form-control" id="todate" placeholder="to" value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="container step-container">
                                <h2 className='mb-4'>Payment Details</h2>
                                <div class="row">
                                    <div className="col-lg-12">
                                        {/* <!-- credit card info--> */}
                                        <div id="credit-card">
                                            <div className="form-group">
                                                <label>Payment amount</label>
                                                <h2>{reservationRoom.reservationPrice * getDateDiff()}</h2>
                                            </div>
                                            <div className="form-group"> <label for="cardOwner">
                                                <h6>Card Owner</h6>
                                            </label>
                                                <input type="text" name="cardOwner" placeholder="Card Owner Name" required class="form-control " value={cardOwner} onChange={(e) => { setCardOwner(e.target.value) }} /> </div>
                                            <div className="form-group"> <label for="cardNumber">
                                                <h6>Card number</h6>
                                            </label>
                                                <div className="input-group">
                                                    <input type="text" name="cardNumber" placeholder="Valid card number" className="form-control " required value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group"> <label><span className="hidden-xs">
                                                        <h6>Expiration Date</h6>
                                                    </span></label>
                                                        <div className="input-group">
                                                            <input type="number" placeholder="MM" name="" className="form-control" required value={expiryMonth} onChange={(e) => { setExpiryMonth(e.target.value) }} />
                                                            <input type="number" placeholder="YY" name="" className="form-control" required value={expiryYear} onChange={(e) => { setExpiryYear(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                        <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                                    </label>
                                                        <input type="text" required className="form-control" value={cvv} onChange={(e) => { setCvv(e.target.value) }} /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="container step-container-step03">
                                <h2 className='mb-3'>Summary</h2>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">First Name</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{firstName}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="last">Last Name</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{lastName}</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="company">Email</strong>
                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{email}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="phone">Phone Number</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{contactNo}</label>
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
                                            <label for="company">{dateFrom}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="email">Reservation to</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="company">{dateTo}</label>
                                        </div>
                                    </div>
                                </div>

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
                        )}
                        {step === 4 && (
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
                        )}
                        <div className="buttongroup">
                            {((step === 2) || (step === 3)) &&
                                <button className="btn w-25" onClick={() => { decreaseStepFunc() }}>Previous</button>
                            }
                            {((step === 1) || (step === 2)) &&
                                <button className="btn w-25" onClick={() => { increaseStepFunc() }}>Next</button>
                            }
                            {step === 3 &&
                                <button className="btn bt w-25" onClick={(e) => { increaseStepFunc(); addReservationFunc(); makeReservation(e) }}>Submit </button>
                            }
                            {step === 4 &&
                                <button className="btn w-25" onClick={() => { navigate('/userProfile') }}>View Details</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddReservation