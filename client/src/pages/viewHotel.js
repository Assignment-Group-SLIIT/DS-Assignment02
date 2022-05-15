import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { IoBedOutline, IoKeyOutline, IoLayersOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdKayaking, MdDirectionsCar, MdWifi, MdOutlineEmojiTransportation, MdOutlineFitnessCenter, MdOutlineAcUnit } from "react-icons/md";

import { HOTELS } from './utils/hotels'
import { getAllAvailableRoomsOfAHotel } from '../services/RoomReservationServices'
import Spinner from '../components/spinner';
import GoogleMaps from './googleMaps';

const ViewHotel = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [hotelId, setHotelId] = useState(0)
    const [hotelName, setHotelName] = useState("");
    const [availableRoomsList, setAvailableRoomsList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setHotelId(location?.state?.id);
        setHotelName(HOTELS[hotelId].hotelname);


        const loadHotelAvailableRooms = (hotelName) => {
            setIsLoading(true);
            getAllAvailableRoomsOfAHotel(hotelName)
                .then((response) => {
                    if (response.ok) {
                        setAvailableRoomsList(response.data);
                        setIsLoading(false);
                    }
                }).catch((error) => {
                    // setAvailableRoomsList({}, {})
                    setIsLoading(false);
                    console.error(error)
                })
        }

        if (HOTELS[hotelId].hotelname != 'undefined') {
            loadHotelAvailableRooms(HOTELS[hotelId].hotelname)
        }

    }, [hotelName, hotelId, location?.state?.id])

    console.log(availableRoomsList)

    return (
        <>{isLoading ? (
            <Spinner />
        ) :
            (
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
                            <div class="row mt-3">
                                {/* <div class="col d-flex justify-content-center"> */}
                                <div class="col">
                                    <h2>
                                        {HOTELS[hotelId].hotelname}
                                    </h2>
                                </div>

                                <div class="row">
                                    <p class="lead">&nbsp;{HOTELS[hotelId].description}</p>
                                </div>
                            </div>
                            <div class="row mt-3 border-bottom">
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdDirectionsCar /></span>&nbsp;Free parking</p>
                                </div>
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdKayaking /></span>&nbsp;Pool</p>
                                </div>
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdWifi /></span>&nbsp;Free WiFi</p>
                                </div>
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdOutlineEmojiTransportation /></span>&nbsp;Airport transfer</p>
                                </div>
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdOutlineFitnessCenter /></span>&nbsp;Gym</p>
                                </div>
                                <div class="col-2">
                                    <p class="h6"><span class="badge badge-secondary"><MdOutlineAcUnit /></span>&nbsp;Air conditioning</p>
                                </div>
                            </div>
                            <div class="row  mt-4">
                                <h4>
                                    Property highlights
                                </h4>
                                <div class="col-4 mt-3">
                                    <strong>Main amenities</strong>
                                    <ul>
                                        <li>&nbsp;80 smoke-free guestrooms</li>
                                        <li>&nbsp;Daily housekeeping</li>
                                        <li>&nbsp;Near the beach</li>
                                        <li>&nbsp;Restaurants</li>
                                        <li>&nbsp;Outdoor pool</li>
                                        <li>&nbsp;Rooftop terrace</li>
                                        <li>&nbsp;Airport shuttle</li>
                                    </ul>
                                </div>
                                <div class="col-4 mt-3">

                                    <strong>For families</strong>
                                    <ul>
                                        <li>&nbsp;Free cots/infant beds</li>
                                        <li>&nbsp;Rollaway/extra beds (surcharge)</li>
                                        <li>&nbsp;Private bathroom</li>
                                        <li>&nbsp;Television</li>
                                        <li>&nbsp;Laundry facilities</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row  mt-4  border-top">
                                <h4>
                                    Rooms available for reservation
                                </h4>
                                <div className="products-body">
                                    {availableRoomsList.map((reservation, key) => {
                                        return (
                                            <div className="card shadow" key={key}>
                                                <img src={HOTELS[hotelId].images[key + 1]?.imgSrc} className="card-img" alt="..." />
                                                <div className="card-body w-100">
                                                    <h6 className="card-title"><IoBedOutline />&nbsp;Room type: &emsp;{reservation.type} </h6>
                                                    <h6 className="card-title"><IoKeyOutline />&nbsp;Room no: &emsp;{reservation.roomNo} </h6>
                                                    <h6 className="card-title"><IoLayersOutline />&nbsp;Floor: &emsp;{reservation.floor} </h6>
                                                    <h6 className="card-title"><IoPricetagsOutline />&nbsp;Price: &emsp;Rs.{reservation.reservationPrice}.00 </h6>
                                                </div>
                                                <button className='btn w-75 mb-4' disabled={reservation?.status !== 'Available'}
                                                    onClick={() => {
                                                        navigate("/addReservation", { state: { reservation: reservation } })
                                                    }}>Reserve now</button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div class="row  mt-4 border-top">
                                <GoogleMaps address={HOTELS[hotelId].address} lat={HOTELS[hotelId].lat} lng={HOTELS[hotelId].lng} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewHotel