import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/UserServices';
import { Dropdown, DropdownType, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Signup = () => {

    let history = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const [ReqErr, setRequiredErr] = useState()

    const validation = () => {
        if (!username || !email || !password || !repassword) {
            setRequiredErr(true)
            Swal.fire({
                icon: 'warning',
                title: 'Required',
                text: 'Complete all required  fields!!',
                confirmButtonColor: '#F7444E',
            })
        } else {
            setRequiredErr(false)
        }
    }


    const signUpFunc = (e) => {
        e.preventDefault()
        validation()
        if (ReqErr) {

            if (password === repassword) {
                const payload = {
                    username,
                    email,
                    password,
                    role: 'Customer',
                }
                console.log("payload>>", payload);

                registerUser(payload).then((response) => {
                    console.log(response)
                    if (response.ok) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Password reset succesfully !!!',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => { history('/signin') })

                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: 'something went wrong!!',
                            confirmButtonColor: '#F7444E',
                        })
                    }
                }).catch((error) => {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'something went wrong!!',
                        confirmButtonColor: '#F7444E',
                    })
                })
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Password didnt Match Try again!!',
                    confirmButtonColor: '#F7444E',
                })
            }
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
                                {/* <div class="form-group pb-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label htmlFor="password" className="form-label mt-2">User</label>
                                        </div>
                                        <div class="col">
                                            <Dropdown
                                                onSelect={handleSelect}
                                            >
                                                <Dropdown.Toggle id="dropdown-basic" className='signup-dropdown-btn'>
                                                    Select
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu >
                                                    <Dropdown.Item eventKey="customer">Customer</Dropdown.Item>
                                                    <Dropdown.Item eventKey="admin" >Admin</Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-group pb-3">
                                    <label htmlFor="HotelName" className="form-label">Hotel Name</label>
                                    <input type="text" placeholder="Hotel Name" className="form-control" id="hotelName" value={hotelName} onChange={(e) => { setHotelName(e.target.value) }} required />
                                </div> */}
                                <div class="pb-2">
                                    <button className="btn btn-primary w-100 font-weight-bold mt-2 rounded-pill" onClick={(e) => { signUpFunc(e); validation() }}>Submit</button>
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