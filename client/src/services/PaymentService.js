const axios = require('axios')
import { getToken } from '../utils/token';

const BASE_URL = `http://localhost:4000/payments`

export const createAPayment = async (paymentPayload) => {

    try {
        const response = await axios.post(BASE_URL, paymentPayload, {
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

export const getPaymentDetails = async (user, date) => {

    try {
        const response = await axios.post(`${BASE_URL}/${user}/${date}`, {
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