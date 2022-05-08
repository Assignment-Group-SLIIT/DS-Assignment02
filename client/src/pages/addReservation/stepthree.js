import React from 'react'

const Stepthree = () => {
    return (
        <div>
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
        </div>
    )
}

export default Stepthree