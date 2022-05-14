import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [reEnteredPassword, setEnteredPassword] = useState();
    return (
        <div>
            <div className="content-body">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src="https://i.ibb.co/mcFfLCV/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" className="img-fluid-signup" />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Forget Password ?</h3>
                        <div className="form-style">
                            <>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input type="email" placeholder="Email" className="form-control" id="email" required />
                                </div>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="username" className="form-label">New Password</label>
                                    <input type="password" placeholder="New Password" className="form-control" id="username" required />
                                </div>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="password" className="form-label">Rewrite Password</label>
                                    <input type="password" placeholder="Re-write Password" className="form-control" id="username" required />
                                </div>
                                <div class="pb-2">
                                    <button className="btn btn-primary w-100 font-weight-bold mt-2 rounded-pill">Submit</button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgetPassword