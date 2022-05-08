import React, { useState, useEffect } from "react";
import UpdateReservation from "./modal/updateModal";
import ViewReservation from "./modal/viewModal";
import { deleteRoom, getAllAvailableRoomsOfAHotel, getAllReservedRoomsOfAHotel, getAllRoomofAHotelByDate, getAllRoomsOfAHotel, getRoomDetailsByDate } from "../../services/RoomReservationServices";
import { Modal } from "react-bootstrap";

function HotelRooms() {
    const [search, setSearch] = useState("");
    const [handleReserveHote, setHandleReserveHotel] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);


    useEffect(() => {
        getAllRoomsOfAHotel("Little Star").then((response) => {
            console.log("data", response)
            if (response.ok) {
                setHandleReserveHotel(response.data);
            }
        });

    }, []);

    const handleViewOnClick = () => {
        setModalShow(true);
    }

    const openModal = (reservation) => {
        setData(reservation);
        handleViewOnClick();
    }


    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    function onDelete(modalDataDelete) {
        
            deleteRoom(modalDataDelete.hotelName, modalDataDelete.roomNo).then((response) => {
                if(response.ok){
                    alert("Successfully deleted").then(() =>{
                        window.location.reload();
                    })
                }
            })
        }


    const openModalUpdate = (data) => {
        console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);
    }

    const searchRooms = (e) => {
        e.preventDefault();
        if (search == 'Available') {
            getAllAvailableRoomsOfAHotel("Little Star")
                .then((response) => {
                    setHandleReserveHotel(response.data);
                }).catch((error) => {
                    console.error(error)
                })
        } else if (search == 'Reserved') {
            getAllReservedRoomsOfAHotel("Little Star")
                .then((response) => {
                    setHandleReserveHotel(response.data);
                }).catch((error) => {
                    console.error(error)
                })
        } else if (!isNaN(search.charAt(0))) {
            getAllRoomofAHotelByDate("Little Star", search)
                .then((response) => {
                    setHandleReserveHotel(response.data);
                }).catch((error) => {
                    console.error(error)
                })
        }
    }

    return (
        <div className="page-component-body">
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
            <br />
            <div className="table-emp ">
                <div class="row table-head mt-3">
                    <div class="col">
                        <h3 className="float-left" >List of Hotel Room Reservation</h3>
                    </div>
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={(e) => searchRooms(e)}>
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        value={search} onChange={(event) => { setSearch(event.target.value) }}
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
                            <th>Room No</th>
                            <th>Reserved From</th>
                            <th>Reserved To</th>
                            <th>Customer Name</th>
                            <th>Payment Status</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className="modal-delete">
                    <Modal.Header>
                        <Modal.Title>Confirm Deletion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you want to remove this room from being reserved?</p>
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
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateReservation
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>
        </div >
    )
}

export default HotelRooms;