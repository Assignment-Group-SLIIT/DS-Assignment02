import React from 'react'

const Steptwo = () => {
    return (
        <div>
            <div className="container step-container">
                <h2>Contact Us</h2>
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
                            <label for="company">Company</label>
                            <input type="text" className="form-control" placeholder="" id="company" />
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
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="email" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="url">Your Website <small>Please include http://</small></label>
                            <input type="url" className="form-control" id="url" placeholder="url" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steptwo