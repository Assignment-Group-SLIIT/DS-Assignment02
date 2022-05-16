import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { getToken, removeUserSession } from '../utils/token';

import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
    const navigate = useNavigate();

    const token = getToken();

    const logout = () => {
        removeUserSession();
        navigate("/signin");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar shadow">
                <div className="container-fluid navbar-container">
                    <h5 className="navbar-brand">
                        <img src={logo} alt="" width="300" height="100" class="d-inline-block align-text-top nav-logo" onClick={() => {
                            navigate("/home")
                        }} />

                    </h5>

                    <div className="sidetext">


                        {token ? (
                            <div className="navbar-group w-100">
                                <label className="sidetext-links mr-4" onClick={logout}>
                                    logout
                                </label>
                                <IoPersonCircleOutline className="sidetext-links" size={30} onClick={() => {
                                    navigate("/userProfile")
                                }} />
                            </div>
                        ) : (
                            <>
                                <Link to="/signup" className="sidetext-links mr-4">
                                    <label>
                                        signup
                                    </label>
                                </Link>
                                <Link to="/signin" className="sidetext-links">
                                    <label>
                                        login
                                    </label>
                                </Link>
                            </>
                        )}

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