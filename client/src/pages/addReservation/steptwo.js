import React from 'react'

const Steptwo = () => {
    return (
        <div>
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
        </div>
    )
}

export default Steptwo