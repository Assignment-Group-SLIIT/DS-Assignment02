import React from 'react'

const navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid navbar-container">
                    <h5 className="navbar-brand">
                        {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
                        Galadhari - Uganda branch
                    </h5>
                    <div className="sidetext">
                        <label className='sidetext-links'>
                            login
                        </label>
                        <label className='sidetext-links'>
                            signup
                        </label>
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

export default navbar