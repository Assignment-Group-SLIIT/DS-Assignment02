import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid navbar-container">
                    <h5 className="navbar-brand">
                        <img src={logo} alt="" width="300" height="100" class="d-inline-block align-text-top nav-logo" onClick={() => {
                            navigate("/")
                        }} />
                        {/* Galadhari - Uganda branch */}
                    </h5>
                    <div className="sidetext">
                        <Link to="/signin" className="sidetext-links">
                            <label>
                                login
                            </label>
                        </Link>
                        <Link to="/signup" className="sidetext-links">
                            <label>
                                signup
                            </label>
                        </Link>
                    </div>
                </div>
                {/* <div className="container-fluid">
                    <div className="nav-bottom">
                        <div className="row nav-bottom-row">
                            <div className="col nav-bottom-col col-4 border-start border-end">
                                link 01
                            </div>
                            <div className="col nav-bottom-col col-4 border-end">
                                link 02
                            </div>
                            <div className="col nav-bottom-col col-4 border-end">
                                link 03
                            </div>
                        </div>
                    </div>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar