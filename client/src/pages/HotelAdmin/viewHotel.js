
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UpdateReservation from "./modal/updateModal";
import ViewReservation from "./modal/viewModal";
import { getAllAvailableRoomsOfAHotel } from "../../services/RoomReservationServices";
import { Modal } from "react-bootstrap";

function HotelRooms() {
    // const [search, setSearch] = useState("");
    const [handleReserveHote, setHandleReserveHotel] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    // const [modalDataDelete, setModalDataDelete] = useState([]);
    // const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    // const [modalDelete, setModalDelete] = useState(false);

    // const [modalLoading, setModalLoading] = useState(false);
    // const [refresgPage, setRefreshPage] = useState(false);

    useEffect(() => {
        getAllAvailableRoomsOfAHotel("Little Star").then((response) => {
            if (response.ok) {
                setHandleReserveHotel(response.data);
            }
        });

    }, []);


    const openModal = (reservation) => {
        setData(reservation);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        //   setModalDataDelete(data);
        //  setModalDeleteConfirm(true);
    }

    const openModalUpdate = (data) => {
        console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);
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
                                <form >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        // value={search} onChange={(event) => { setSearch(event.target.value) }} 
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
                            <th>Reservation Date</th>
                            <th>Reservation End Date</th>
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
                                        {/* <Link class="btn btn-danger btn-sm" onClick={() => openModalDelete(reservation)} role="button"> remove</Link>  */}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* 
            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this item ?</p>

                </Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col -6">
                            <button type="submit" className="btn btn-delete" onClick={() => { setModalDelete(true); setModalDeleteConfirm(false); }}>
                                Confirm
                            </button>
                        </div>
                        <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                            <button type="reset" className="btn btn-reset">
                                cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* open delete form */}
            {/* <Modal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <DeleteModal
                    data={modalDataDelete}
                    onHide={() => setModalDelete(false)}
                />
            </Modal>

            <Modal show={modalLoading} size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="spinner-grow text-danger" role="status">
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                        </div><div class="spinner-grow text-danger" role="status">
                        </div>

                        <span class="sr-only">something went wrong...</span>
                    </div>
                    <div class="d-flex justify-content-center mt-4 h5"> something went wrong</div>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { window.location.reload() }}>
                            Try again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/*Update modal for room reservation*/}
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