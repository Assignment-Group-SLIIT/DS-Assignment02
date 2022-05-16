import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllRoomsOfAReserver, updateRoomReservationDetails } from '../services/RoomReservationServices';
import { Modal } from "react-bootstrap";
import ViewReservation from './HotelAdmin/modal/viewModal';
import { getRoomDetailsByDate } from '../services/RoomReservationServices';
import { deleteTaxiReservation, getOneTaxiReservation, getUserAllTaxiReservations } from '../services/TaxiServices';
import { getUser } from '../utils/token'
import Swal from 'sweetalert2'

const UserProfile = () => {

    const navigate = useNavigate();

    //view room reservation detail
    const [search, setSearch] = useState("");
    const [hotelReservations, setHotelReservations] = useState([]);
    const [hotelName, setHotelName] = useState("");
    const [roomId, setRoomId] = useState("");

    //view taxi reservation details
    const [taxiReservations, setTaxiReservations] = useState([]);
    const [searchTaxi, setSearchTaxi] = useState("");

    //view a single hotel reservation details
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    //setting modal to cancel a reservation
    const [modalReservationCancel, setReservationCancel] = useState([]);
    const [modalCancelConfirm, setModalCancelConfirm] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    const user = getUser()

    useEffect(() => {
        getAllRoomsOfAReserver(user.username)
            .then((response) => {
                console.log("data", response.data)
                setHotelReservations(response.data.reverse());
            }).catch((err) => {
                console.error(err)
            })
    }, [])

    useEffect(() => {
        getUserAllTaxiReservations(user.username)
            .then((response) => {
                console.log("data", response.data)
                setTaxiReservations(response.data.reverse());
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



        updateRoomReservationDetails(modalReservationCancel.hotelName, modalReservationCancel.roomNo, UpdateReservation)
            .then((response) => {
                if (response.ok) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Cancelled Your Reservation at hotel' + `${modalReservationCancel.hotelName}`,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        window.location.reload();
                    })

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
            getRoomDetailsByDate(hotelName, roomId, search)
                .then((response) => {
                    console.log("data", response.data)

                    setHotelReservations(response.data);
                }).catch((error) => {
                    // setHotelReservations([]);
                    window.location.reload();
                })
        }
    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    function onDelete(modalDataDelete) {

        deleteTaxiReservation(modalDataDelete.user, modalDataDelete.date).then((response) => {
            if (response.ok) {

                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully deleted!!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
                    window.location.reload();

                })

            }
        })
    }

    const searchTaxis = (e) => {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {
            getOneTaxiReservation(user.username, searchTaxi)
                .then((response) => {
                    console.log("data", response.data)

                    setTaxiReservations(response.data);
                }).catch((error) => {
                    console.error(error)
                })
        }
    }


    return (
        <div className='page-component-body"'>

            <div className="content-body-admin-reservation mt-5">
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
                        {/* <div className="col-md-8"></div> */}
                        <div className="col">
                            <select className="form-control"
                                value={hotelName}
                                onChange={(e) => { setHotelName(e.target.value) }}>
                                <option>Select Hotel</option>
                                <option>Amagi Aria</option>
                                <option>Mandarina Colombo</option>
                                <option>Negombo New Queen's Palace</option>
                                <option>Residence by Uga Escapes</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Room ID" className="form-control"
                                value={roomId}
                                onChange={(e) => { setRoomId(e.target.value) }} />
                        </div>
                        <div className="col">
                            <div class="input-group input-group-search">
                                <div class="searchbar">
                                    <form onSubmit={(e) => searchRooms(e)}>
                                        <input class="search_input" type="text" name="search" placeholder="Reserve Date"
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
                                            <button className='btn float-left' onClick={() => openModalUpdate(reservation)}>Cancel</button>
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
                                <p><strong className='text-danger'>*Please note that completed payments will not be refunded</strong></p>
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
                </div>

                <div className="table-emp mt-5">


                    <div class="row table-head mt-5">
                        <div class="col mb-3">
                            <h3 className="float-left" >List of Taxi Reservation</h3>
                            <button className="btn float-right" onClick={() => { navigate('/addTaxi') }}>+Book a Taxi</button>
                            {/* <hr className='mt-5'></hr> */}
                        </div>
                        <hr></hr>

                    </div>
                    <div class="row table-head-search">
                        <div className="col-md-8"></div>

                        <div className="col">
                            <div class="input-group input-group-search">
                                <div class="searchbar">
                                    <form onSubmit={(e) => searchTaxis(e)}>
                                        <input class="search_input" type="text" name="searchTaxi" placeholder="Reserve Date"
                                            value={searchTaxi}
                                            onChange={(event) => { setSearchTaxi(event.target.value) }}
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
                                <th></th>
                                <th></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taxiReservations.map((reservation) => {
                                return (
                                    <tr >

                                        <td >{reservation.type}</td>
                                        <td >{reservation.distance}</td>
                                        <td >{reservation.amount}</td>
                                        <td >{reservation.paymentStatus}</td>
                                        <td >{reservation.date}</td>
                                        <td></td>
                                        <td></td>
                                        <td >
                                            <button className='btn '
                                                onClick={() => openModalDelete(reservation)}
                                            >Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <Modal show={modalDeleteConfirm} size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <div className="modal-delete">
                            <Modal.Header>
                                <Modal.Title>Confirm Deletion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Are you sure you want to remove this taxi reservation?</p>
                            </Modal.Body>
                        </div>

                        <Modal.Footer>
                            <div className="row">
                                <div className="col -6">
                                    <button type="submit" className="btn btn-delete" onClick={() => { onDelete(modalDataDelete); }}>
                                        Confirm
                                    </button>
                                </div>
                                <div className="col-6   text-right" onClick={() => setModalDeleteConfirm(false)}>
                                    <button type="reset" className="btn btn-reset">
                                        cancel
                                    </button>
                                </div>
                            </div>
                        </Modal.Footer>

                    </Modal>
                </div>

            </div>
        </div >
    )
}

export default UserProfile