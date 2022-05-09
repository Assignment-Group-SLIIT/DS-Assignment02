import React, { useEffect, useState } from 'react'

const AddReservation = () => {
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)

    //step one
    const [dateFrom, setDateFrom] = useState(new Date());

    const increaseStepFunc = () => {
        setStep(step + 1)
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

            default:
                break;
        }
    }, [step]);

    const addReservationFunc = () => {
        setProgress(100);
    }


    return (
        <>
            <div className="content-body">
                <div className="addReservation-container shadow">
                    <div className="progress mb-5">
                        <div class="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{progress}%</div>
                    </div>
                    {step === 1 && (
                        <div className="container step-container">
                            <h2 className='mb-5'>Reservation Details</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="first">First Name</label>
                                        <input type="text" className="form-control" placeholder="" id="first" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="last">Last Name</label>
                                        <input type="text" className="form-control" placeholder="" id="last" />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="company">Email</label>
                                        <input type="email" className="form-control" placeholder="email" id="company" />
                                    </div>


                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="phone" />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="email">Reservation from</label>
                                        <input type="date" className="form-control" id="fromdate" placeholder="from" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="email">Reservation to</label>
                                        <input type="date" className="form-control" id="todate" placeholder="to" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="container step-container">
                            <h2 className='mb-4'>Reservation Details</h2>
                            <div class="row">
                                <div class="col-lg-12">
                                    {/* <!-- credit card info--> */}
                                    <div id="credit-card">
                                        <div class="form-group">
                                            <label>Payment amount</label>
                                            <h2>$100.00</h2>
                                        </div>
                                        <div class="form-group"> <label for="username">
                                            <h6>Card Owner</h6>
                                        </label>
                                            <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
                                        <div class="form-group"> <label for="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                            <div class="input-group">
                                                <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                                    <div class="input-group">
                                                        <input type="number" placeholder="MM" name="" class="form-control" required />
                                                        <input type="number" placeholder="YY" name="" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                    <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                </label>
                                                    <input type="text" required class="form-control" /> </div>
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="first">First Name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="last">Last Name</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="company">Email</label>
                                    </div>


                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label for="phone">Phone Number</label>

                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="email">Reservation from</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="email">Reservation to</label>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-card">
                                <div className='card'>
                                    <div class="card__front card__part">
                                        <p class="card_numer">**** **** **** 6258</p>
                                        <div class="card__space-75">
                                            <span class="card__label">Card holder</span>
                                            <p class="card__info">John Doe</p>
                                        </div>
                                        <div class="card__space-25">
                                            <span class="card__label">Expires</span>
                                            <p class="card__info">10/25</p>
                                        </div>
                                    </div>

                                    <div class="card__back card__part">
                                        <div class="card__black-line"></div>
                                        <div class="card__back-content">
                                            <div class="card__secret">
                                                <p class="card__secret--last">420</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="container step-container">
                        </div>
                    )}
                    <div className="buttongroup">
                        {((step === 2) || (step === 3)) &&
                            <button class="btn btn-primary w-25" onClick={() => { decreaseStepFunc() }}>Previous</button>
                        }
                        {((step === 1) || (step === 2)) &&
                            <button class="btn btn-primary w-25" onClick={() => { increaseStepFunc() }}>Next</button>
                        }
                        {step === 3 &&
                            <button class="btn btn-primary w-25" onClick={() => { increaseStepFunc(); addReservationFunc() }}>Submit </button>
                        }
                        {step === 4 &&
                            <button class="btn btn-primary w-25" onClick={() => { increaseStepFunc(); addReservationFunc() }}>View Details</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddReservation