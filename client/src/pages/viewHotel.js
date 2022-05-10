import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { HOTELS } from './utils/hotels'
import { getAllAvailableRoomsOfAHotel } from '../services/RoomReservationServices'

const ViewHotel = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [hotelId, setHotelId] = useState(0)
    const [hotelName, setHotelName] = useState("");
    const [availableRoomsList, setAvailableRoomsList] = useState([])

    useEffect(() => {
        setHotelId(location?.state?.id);
        setHotelName(HOTELS[hotelId].hotelname);


        const loadHotelAvailableRooms = (hotelName) => {
            getAllAvailableRoomsOfAHotel(hotelName)
                .then((response) => {
                    if (response.ok)
                        setAvailableRoomsList(response.data);
                }).catch((error) => {
                    console.error(error)
                })
        }

        if (HOTELS[hotelId].hotelname != 'undefined') {
            loadHotelAvailableRooms(HOTELS[hotelId].hotelname)
        }

    }, [hotelName])

    console.log(availableRoomsList)

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
                        <div>
                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Room No</th>
                                        <th>Floor</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Price Per day</th>
                                        <th>Pre Payment Required</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {availableRoomsList.map((reservation) => {
                                        return (
                                            <tr>
                                                <td >{reservation.roomNo}</td>
                                                <td >{reservation.floor}</td>
                                                <td >{reservation.type}</td>
                                                <td >{reservation.status}</td>
                                                <td >{reservation.reservationPrice}</td>
                                                <td >{reservation.mustPayOnline == true ? "Yes" : "No"}</td>
                                                <button onClick={() => {
                                                    navigate("/addReservation", { state: { reservation: reservation } })
                                                }}>Reserve</button>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewHotel