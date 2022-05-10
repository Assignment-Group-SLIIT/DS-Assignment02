import React, { useEffect, useState } from 'react'
import { getAllRoomsOfAReserver, updateRoomReservationDetails } from '../services/RoomReservationServices';
import { Modal } from "react-bootstrap";
import ViewReservation from './HotelAdmin/modal/viewModal';
import { getRoomDetailsByDate } from '../services/RoomReservationServices';

const UserProfile = () => {

    const [search, setSearch] = useState("");
    const [hotelReservations, setHotelReservations] = useState([]);

    //view a single hotel reservation details
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    //setting modal to cancel a reservation
    const [modalReservationCancel, setReservationCancel] = useState([]);
    const [modalCancelConfirm, setModalCancelConfirm] = useState(false);


    useEffect(() => {
        getAllRoomsOfAReserver('Malki')
            .then((response) => {
                console.log("data", response.data)
                setHotelReservations(response.data);
            }).catch((err) => {
                console.error(err)
            })
    }, [])


    const handleViewOnClick = () => {
        setModalShow(true);
    }

    const openModal = (reservation) => {
        setData(reservation);
        handleViewOnClick();
    }

    const openModalUpdate = (data) => {
        setReservationCancel(data);
        setModalCancelConfirm(true);
    }

    function onCancel(modalReservationCancel) {
        console.log(modalReservationCancel)

        const UpdateReservation = {
            hotelName: modalReservationCancel.hotelName,
            roomNo: modalReservationCancel.roomNo,
            floor: modalReservationCancel.floor,
            type: modalReservationCancel.type,
            status: "Available",
            reservationStartDate: modalReservationCancel.reservationStartDate,
            reservationEndDate: modalReservationCancel.reservationEndDate,
            reservationPrice: modalReservationCancel.reservationPrice,
            paymentStatus: "Pending",
            reserverName: " ",
            mustPayOnline: modalReservationCancel.mustPayOnline,
            totalPayment: 0
        }

        if (modalReservationCancel.paymentStatus == 'Completed') {
            alert("You have completed the payment so money will not be refounded")
        }

        updateRoomReservationDetails(modalReservationCancel.hotelName, modalReservationCancel.roomNo, UpdateReservation)
            .then((response) => {
                if (response.ok) {
                    alert("Successfully Cancelled Your Reservation at hotel " + modalReservationCancel.hotelName)
                    window.location.reload();
                } else {
                    console.log(response)
                }
            }).catch((error) => {
                console.error(error)
            })

    }

    const searchRooms = (e) => {
        e.preventDefault();
            if (!isNaN(search.charAt(0))) {
                getRoomDetailsByDate("Amagi Aria","B244",search)
                .then((response) => {
                    console.log("data",response.data)

                    setHotelReservations(response.data);
                    }).catch((error) => {
                        console.error(error)
                    })
            }
    }

    return (
        <div className='page-component-body"'>

            <div className="content-body">
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <ViewReservation
                        data={modalData}
                        onHide={() => setModalShow(false)
                        }
                    />
                </Modal>
                <div className="table-emp ">
                    <div class="row table-head mt-3">
                        <div class="col">
                            <h3 className="float-left" >User Reservations</h3>
                            <hr className='mt-5'></hr>
                        </div>
                    </div>
                    <div class="row table-head-search">
                        <div className="col-md-8"></div>

                        <div className="col">
                            <div class="input-group input-group-search">
                                <div class="searchbar">
                                    <form onSubmit={(e) => searchRooms(e)}>
                                        <input class="search_input" type="text" name="search" placeholder="Search..."
                                            value={search}
                                            onChange={(event) => { setSearch(event.target.value) }}
                                            require />
                                        <button class="btn search_icon" type="submit" id="submit" name="submit">
                                            <i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th>Hotel Name</th>
                                <th>Room No</th>
                                <th>Room Type</th>
                                <th>Reserved From</th>
                                <th>Reserved To</th>
                                <th>Total Amount</th>
                                <th>Payment Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {hotelReservations.map((reservation) => {
                                return (
                                    <tr>
                                        <td onClick={() => openModal(reservation)}>{reservation.hotelName}</td>
                                        <td >{reservation.roomNo}</td>
                                        <td >{reservation.type}</td>
                                        <td >{reservation.reservationStartDate}</td>
                                        <td >{reservation.reservationEndDate}</td>
                                        <td >{reservation.totalPayment}</td>
                                        <td >{reservation.paymentStatus}</td>
                                        <td>


                                            <button onClick={() => openModalUpdate(reservation)}>Cancel</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Modal show={modalCancelConfirm} size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <div className="modal-delete">
                            <Modal.Header>
                                <Modal.Title>Reservation Cancellation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Are you sure that you want cancel the reservation?</p>
                            </Modal.Body>
                        </div>

                        <Modal.Footer>
                            <div className="row">
                                <div className="col -6">
                                    <button type="submit" className="btn btn-delete" onClick={() => { onCancel(modalReservationCancel); }}>
                                        Confirm
                                    </button>
                                </div>
                                <div className="col-6   text-right" onClick={() => setModalCancelConfirm(false)}>
                                    <button type="reset" className="btn btn-reset">
                                        cancel
                                    </button>
                                </div>
                            </div>
                        </Modal.Footer>

                    </Modal>

                    <div class="row table-head mt-3">
                        <div class="col">
                            {/* <h3 className="float-left" >List of Hotel Room Reservation</h3> */}
                            <hr className='mt-5'></hr>
                        </div>
                    </div>
                    <div class="row table-head-search">
                        <div className="col-md-8"></div>

                        <div className="col">
                            <div class="input-group input-group-search">
                                <div class="searchbar">
                                    <form
                                    // onSubmit={(e) => searchRooms(e)}
                                    >
                                        <input class="search_input" type="text" name="search" placeholder="Search..."
                                            // value={search}
                                            // onChange={(event) => { setSearch(event.target.value) }}
                                            require />
                                        <button class="btn search_icon" type="submit" id="submit" name="submit">
                                            <i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th>Vehicle Type</th>
                                <th>Distance</th>
                                <th>Amount</th>
                                <th>Payment Status</th>
                                <th>Date</th>

                            </tr>
                        </thead>
                        {/* <tbody>
                            {handleReserveHote.map((reservation) => {
                                return (
                                    <tr>
                                        <td onClick={() => openModal(reservation)}>{reservation.roomNo}</td>
                                        <td >{reservation.reservationStartDate}</td>
                                        <td >{reservation.reservationEndDate}</td>
                                        <td >{reservation.reserverName}</td>
                                        <td >{reservation.paymentStatus}</td>
                                        <td >{reservation.status}</td>
                                        <td>
                                            <button
                                                class="btn btn-light btn-sm"
                                                onClick={() => openModalUpdate(reservation)}
                                            >
                                                update
                                            </button>
                                            <button onClick={() => openModalDelete(reservation)}>remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody> */}
                    </table>
                </div>

            </div>
        </div>
    )
}

export default UserProfile