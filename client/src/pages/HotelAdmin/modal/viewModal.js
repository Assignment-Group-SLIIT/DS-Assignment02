import React from "react";
import { Modal } from "react-bootstrap";


function ViewReservation(reservation) {

    return (
        <div>
            <Modal.Header >
                <Modal.Title>Reserved Hotel Room Detail</Modal.Title>
                <button className="btn btn-close" onClick={reservation.onHide}></button>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Hotel Name
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.hotelName}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Room No
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.roomNo}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Floor
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.floor}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Type
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.type}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Status
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.status}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Reserved From
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.reservationStartDate}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Reserved To
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.reservationEndDate}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Payment
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.reservationPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Payment Status
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.paymentStatus}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Customer Name
                                    </th>
                                    <td class="text-left">
                                        {reservation.data.reserverName}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}
export default ViewReservation;