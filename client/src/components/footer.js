import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
            <footer className='footer shadow'>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            Rezerve.com © 2022
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img src={logo} alt="" width="300" height="100" class="d-inline-block align-text-top nav-logo" onClick={() => {
                                navigate("/home")
                            }} />
                            {/* <label>all rights reserved</label> */}
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            {/* <p class="text-muted">footer content</p> */}
                            <label>Web application developed
                                for educational purposes only</label>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer