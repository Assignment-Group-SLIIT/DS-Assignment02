const axios = require('axios')

const BASE_URL = `http://localhost:4000/users`

export const registerUser = async (userPayload) => {

    try {
        const response = await axios.post(BASE_URL + "/register", userPayload);
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

export const loginUser = async (user) => {

    try {
        const response = await axios.post(BASE_URL + "/login", user)

        return {
            ok: true,
            data: response.data,
        }

    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }
}

    export const forgetPassword = async (email, newPassword, updatepayload) => {

        try {
            const response = await axios.post(`${BASE_URL}/${email}/${newPassword}`, updatepayload)
    
            return {
                ok: true,
                data: response.data,
            }
    
        } catch (error) {
            return {
                ok: false,
                error: error
            }
        }
    }
