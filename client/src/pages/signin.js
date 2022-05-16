import React, { useState } from 'react'
import { loginUser } from '../services/UserServices'
import { getUser, setUserSession } from '../utils/token'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Signin = () => {

    let history = useNavigate();

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")



    const signInFunc = (e) => {
        e.preventDefault()

        const payload = {
            username,
            password,
        }

        if (!username || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Required',
                text: 'Complete all required  fields!!',
                confirmButtonColor: '#F7444E',
            })
        } else {

            loginUser(payload).then((response) => {

                if (response.ok) {

                    setUserSession(response.data.token, response.data)
                    setUserName('')
                    setPassword('')
                    const user = getUser();
                    console.log(user)
                    if (user.role == 'Hotel Admin') {
                        history("/viewRooms")
                    } else if (user.role == 'Customer') {
                        history("/home")
                    } else if (user.role == 'System Admin') {
                        history("/adminSignup")
                    }

                } else {
                    // console.log(response.error.response.data.status)
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User name or passwrd is incorrect!!',
                        confirmButtonColor: '#F7444E',
                    })
                }
            }).catch((error) => {
                console.error(error)
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'something went wrong1111!!',
                    confirmButtonColor: '#F7444E',
                })
            })
        }

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
                                    <input type="text" placeholder="username" className="form-control" id="username" value={username} onChange={(e) => { setUserName(e.target.value) }} />
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
                                New to this platform? <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin