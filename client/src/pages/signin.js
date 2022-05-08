import React, { useState } from 'react'

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInFunc = (e) => {
        e.preventdefault()

        const payload = {
            email,
            password,
        }

        console.log("payload>>", payload)
    }

    return (
        <>
            <div class="content-body">
                {/* <div className="container">
                    <div className="row signin-row">
                        <div className="col signin-col-image">col-1</div>
                        <div className="col signin-col-form">col-2</div>
                    </div>
                </div> */}
                <div class="row m-5 no-gutters shadow-lg">
                    <div class="col-md-6 d-none d-md-block">
                        <img src="https://i.ibb.co/mcFfLCV/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" class="img-fluid" />
                    </div>
                    <div class="col-md-6 bg-white p-5">
                        <h3 class="pb-3">Login Form</h3>
                        <div class="form-style">
                            <>
                                <div class="form-group pb-3">
                                    <input type="email" placeholder="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div class="form-group pb-3">
                                    <input type="password" placeholder="Password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center"></div>
                                    <div><a href="#">Forget Password?</a></div>
                                </div>
                                <div class="pb-2">
                                    <button class="btn btn-primary w-100 font-weight-bold mt-2 rounded-pill" onClick={(e) => { signInFunc(e) }}>Submit</button>
                                </div>
                            </>
                            <div class="pt-4 text-center">
                                New to this platform? <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin