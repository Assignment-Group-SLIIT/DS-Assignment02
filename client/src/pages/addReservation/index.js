import React, { useState } from 'react'
import Stepone from './stepone'
import Steptwo from './steptwo'
import Stepthree from './stepthree'

const Index = () => {
    const [step, setStep] = useState(1)

    const increaseStepFunc = () => {
        setStep(step + 1)
    }
    const decreaseStepFunc = () => {
        setStep(step - 1)
    }

    return (
        <>
            <div className="content-body">
                <div className="addReservation-container shadow">
                    {step === 1 && (
                        <Stepone />
                    )}
                    {step === 2 && (
                        <Steptwo />
                    )}
                    {step === 3 && (
                        <Stepthree />
                    )}
                    <div className="buttongroup">
                        {((step === 2) || (step === 3)) &&
                            <button class="btn btn-primary w-25" onClick={() => { decreaseStepFunc() }}>Previous</button>
                        }
                        {step !== 3 &&
                            <button class="btn btn-primary w-25" onClick={() => { increaseStepFunc() }}>Next</button>
                        }
                        {step === 3 &&
                            <button class="btn btn-primary w-25">Submit </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index