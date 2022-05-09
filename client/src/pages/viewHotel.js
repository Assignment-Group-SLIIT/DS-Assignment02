import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { HOTELS } from './utils/hotels'

const ViewHotel = () => {
    const location = useLocation()

    const [hotelId, setHotelId] = useState(0)

    useEffect(() => {
        setHotelId(location?.state?.id);
        console.log("hotels array>>>", HOTELS[0].images[0].imgSrc)
    }, [])
    return (
        <>
            <div className="content-body">
                <div className="main-container">
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-6 d-flex pt-1">
                                <Zoom>
                                    <img className="d-block w-100 zoom-img-main" src={HOTELS[hotelId].images[0].imgSrc} height={305} alt="first" />
                                </Zoom>
                            </div>
                            <div class="col-6">
                                <div class="row w-100">
                                    <div class="col-6 d-flex">
                                        <Zoom>
                                            <img className="d-block w-100 zoom-img" src={HOTELS[hotelId].images[1].imgSrc} height={150} alt="second" />
                                        </Zoom>
                                    </div>
                                    <div class="col-6">
                                        <Zoom>
                                            <img className="d-block w-100 zoom-img" src={HOTELS[hotelId].images[2].imgSrc} height={150} alt="third" />
                                        </Zoom>
                                    </div>
                                </div>
                                <div class="row w-100">
                                    <div class="col-6">
                                        <Zoom>
                                            <img className="d-block w-100 zoom-img" src={HOTELS[hotelId].images[3].imgSrc} height={150} alt="fourth" />
                                        </Zoom>
                                    </div>
                                    <div class="col-6">
                                        <Zoom>
                                            <img className="d-block w-100 zoom-img" src={HOTELS[hotelId].images[4].imgSrc} height={150} alt="fourth" />
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {/* <div class="col d-flex justify-content-center"> */}
                            <div class="col">
                                <h2>
                                    {HOTELS[hotelId].hotelname}
                                </h2>
                            </div>
                            <div class="col">
                                2 of 2
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                1 of 3
                            </div>
                            <div class="col">
                                2 of 3
                            </div>
                            <div class="col">
                                3 of 3
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                1 of 2
                            </div>
                            <div class="col">
                                2 of 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewHotel