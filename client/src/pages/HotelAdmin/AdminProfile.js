import React from 'react'

const AdminProfile = () => {
    return (
        <div>
            <div className="content-body">
                <div className="table-emp ">
                    <div class="row table-head mt-3">
                        <div class="col">
                            <h3 className="float-left" >Admin Profile</h3>
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
                                <th>Room No</th>
                                <th>Reserved From</th>
                                <th>Reserved To</th>
                                <th>Customer Name</th>
                                <th>Payment Status</th>
                                <th>Status</th>

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
                                <th>Room No</th>
                                <th>Reserved From</th>
                                <th>Reserved To</th>
                                <th>Customer Name</th>
                                <th>Payment Status</th>
                                <th>Status</th>

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

export default AdminProfile