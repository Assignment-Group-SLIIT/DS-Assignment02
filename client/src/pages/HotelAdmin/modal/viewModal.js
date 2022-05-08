import React, { useState, useEffect } from "react";

function ViewReservation(reservation) {
    return(
        <div>
        {/* <Modal.Header closeButton>
            <Modal.Title>Reserved Hotel : </Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
            <div className="row">
                <div className="col-12">
                    <table class="table table-striped table-light ">
                        <tbody>
                            <tr>
                                <th class="text-left" scope="row">
                                    Hotel Name
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.id} */}
                                    </td>
                            </tr>
                            <tr>
                                <th class="text-left" scope="row">
                                    Room No
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.from} */}
                                    </td>
                            </tr><tr>
                                <th class="text-left" scope="row">
                                    Floor
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.to} */}
                                    </td>
                            </tr>
                            <tr>
                                <th class="text-left" scope="row">
                                    Status
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.status} */}
                                    </td>
                            </tr>
                            <tr>
                                <th class="text-left" scope="row">
                                    Payment 
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.payment} */}
                                    </td>
                            </tr>
                            <tr>
                                <th class="text-left" scope="row">
                                    Payment Status
                                </th>
                                <td class="text-left">
                                    {/* {reservation.data.vehicleType + " " + reservation.data.model} */}
                                    </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        {/* </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-close">Close</button>
        </Modal.Footer> */}
    </div>
    )
}
export default ViewReservation;