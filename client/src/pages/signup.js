import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/UserServices';

const Signup = () => {

    let history = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const signUpFunc = (e) => {
        e.preventDefault()

        if (password === repassword) {
            const payload = {
                username,
                email,
                password,
                role: 'customer'
            }

            registerUser(payload).then((response) => {
                console.log(response)
                if (response.ok) {
                    history('/signin')
                } else {
                    console.log(response)
                }
            }).catch((error) => {
                console.error(error)
            })
        } else {
            console.log("Passwords mismatch")
        }


    }

    return (
        <>
            <div className="content-body">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src="https://i.ibb.co/mcFfLCV/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" className="img-fluid-signup" />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Sign-up Form</h3>
                        <div className="form-style">
                            <>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" placeholder="username" className="form-control" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                                </div>
                                <div class="form-group pb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" placeholder="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                </div>
                                <div class="form-group pb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" placeholder="Password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                </div>
                                <div class="form-group pb-3">
                                    <label htmlFor="password" className="form-label">Re-enter the Password</label>
                                    <input type="password" placeholder="Password" className="form-control" id="password" value={repassword} onChange={(e) => { setRepassword(e.target.value) }} required />
                                </div>
                                <div class="form-group pb-3">
                                    <div className=''>

                                        <div class="container">
                                            <div class="row">
                                                <div class=".col-sm">
                                                    <label htmlFor="password" className="form-label">Re-enter the Password</label>
                                                </div>
                                                <div class="col">
                                                    <div class="btn-group">
                                                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Small button
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            ...
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        {/* <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div> */}

                                    </div>
                                </div>
                                <div class="pb-2">
                                    <button className="btn btn-primary w-100 font-weight-bold mt-2 rounded-pill" onClick={(e) => { signUpFunc(e) }}>Submit</button>
                                </div>
                            </>
                            <div className="pt-4 text-center">
                                Already have an account? <a href='/signin'>Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup