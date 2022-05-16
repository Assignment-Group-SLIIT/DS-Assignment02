import React, { useState } from 'react'
import { forgetPassword } from '../services/UserServices';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setEnteredPassword] = useState('');

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState()
    const [rePasswordError, setRePasswordError] = useState()

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !reEnteredPassword) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please fill the required fileds',
                confirmButtonColor: '#F7444E',
            })
            if (!email) {
                setEmailError("Required")
            }
            if (!password) {
                setPasswordError("Required")
            }
            if (!reEnteredPassword) {
                setRePasswordError("Required")
            }
        } else {
            if (password === reEnteredPassword) {
                let response = await forgetPassword(email, password);
                if (response.ok) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Password reset succesfully !!!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        navigate("/signin")
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'something went wrong!!',
                        confirmButtonColor: '#F7444E',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Password didnt Match Try again!!',
                    confirmButtonColor: '#F7444E',
                })
                setPasswordError("Password didn't Match Try again")
                setRePasswordError("Password didn't Match Try again")
            }
        }
    }

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
                                    <input type="email" placeholder="Email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                                    {(emailError) && <div className='errorMsg'><p>{emailError ? emailError : null}</p></div>}
                                </div>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="username" className="form-label">New Password</label>
                                    <input type="password" placeholder="New Password" className="form-control" id="username" onChange={(e) => { setPassword(e.target.value) }} required />
                                    {(passwordError) && <div className='errorMsg'><p>{passwordError ? passwordError : null}</p></div>}
                                </div>
                                <div class="form-group pb-3 border-primary">
                                    <label htmlFor="password" className="form-label">Rewrite Password</label>
                                    <input type="password" placeholder="Re-write Password" className="form-control" id="username" onChange={(e) => { setEnteredPassword(e.target.value) }} required />
                                    {(rePasswordError) && <div className='errorMsg'><p>{rePasswordError ? rePasswordError : null}</p></div>}
                                </div>
                                <div class="pb-2">
                                    <button className="btn btn-primary w-100 font-weight-bold mt-2 rounded-pill" onClick={(e) => { onSubmit(e) }}>Submit</button>
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