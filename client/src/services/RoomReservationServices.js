import { getToken } from '../utils/token';
const axios = require('axios')


const BASE_URL = `http://localhost:4000/rooms`

export const createRoomReservation = async (roomPayload) => {

    try {
        const response = await axios.post(BASE_URL, roomPayload, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getAllRoomsOfAHotel = async (hotelName) => {

    try {
        const response = await axios.post(BASE_URL + "/" + hotelName, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getAllRoomsOfAReserver = async (reserver) => {

    try {
        const response = await axios.post(BASE_URL + "/reserver/" + reserver, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getAllAvailableRoomsOfAHotel = async (hotelName) => {

    try {
        const response = await axios.get(BASE_URL + "/" + hotelName + "/available", {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getAllReservedRoomsOfAHotel = async (hotelName) => {

    try {
        const response = await axios.get(BASE_URL + "/" + hotelName + "/reserved", {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getRoomDetailsByDate = async (hotelName, room, date) => {

    try {
        const response = await axios.get(`${BASE_URL}/${hotelName}/${room}/${date}`, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getHotelRoomId = async (hotelName, room) => {

    try {
        const response = await axios.get(`${BASE_URL}/${hotelName}/${room}`, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}


export const updateRoomReservationDetails = async (hotelName, room, updatePayload) => {

    try {
        const response = await axios.put(`${BASE_URL}/${hotelName}/${room}`, updatePayload, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        });

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }
}

export const deleteRoom = async (hotelName, room) => {

    try {
        const response = await axios.delete(`${BASE_URL}/${hotelName}/${room}`, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "Content-Type",
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return {
            ok: true,
            data: response.data

        }
    } catch (error) {

        return {
            ok: false,
            error: error
        }

    }

}
