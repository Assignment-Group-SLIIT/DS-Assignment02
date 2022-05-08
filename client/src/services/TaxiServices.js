import { getToken } from '../utils/token';
const axios = require('axios')

const BASE_URL = `http://localhost:4000/taxis`

export const createTaxiReservation = async (taxiPayload) => {

    try {
        const response = await axios.post(BASE_URL, taxiPayload, {
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

export const getUserAllTaxiReservations = async (user) => {

    try {
        const response = await axios.get(`${BASE_URL}/${user}`, {
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

export const getOneTaxiReservation = async (user, date) => {

    try {
        const response = await axios.get(`${BASE_URL}/${user}/${date}`, {
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

export const updateTaxiReservation = async (user, date) => {

    try {
        const response = await axios.put(`${BASE_URL}/${user}/${date}`, updatePayload, {
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

export const deleteTaxiReservation = async (user, date) => {

    try {
        const response = await axios.delete(`${BASE_URL}/${user}/${date}`, updatePayload, {
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