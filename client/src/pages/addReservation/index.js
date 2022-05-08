import React, { useState, useEffect } from 'react'
import Stepone from './stepone'
import Steptwo from './steptwo'
import Stepthree from './stepthree'

const Index = () => {
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
                        <Steptwo />
                    )}
                    {step === 3 && (
                        <Stepthree />
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

export default Index