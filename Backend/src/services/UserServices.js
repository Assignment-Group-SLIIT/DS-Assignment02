const User = require('../models/UserModels')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')


async function login({ username, password }) {
    const user = await User.findOne({ username });

    // synchronously compare user entered password with hashed password
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = auth.generateAccessToken(username);

        // call toJSON method applied during model instantiation
        return { ...user.toJSON(), token }
    } else {
        console.log("ERROR")
        return res.status(500).send({ status: "Error with login ", error: err.message });
    }
}

async function register(params) {
    // instantiate a user modal and save to mongoDB
    const user = new User(params)
    await user.save().then((res) => {
        return res.status(200).send({ message: "User Successfully registered" })
    }).catch((err) => {
        return res.status(300).send({ status: "Could not make the paymnet", error: err.message });
    })
}

async function getById(id) {

    const user = await User.findById(id);
    // call toJSON method applied during model instantiation
    return user.toJSON()
}

module.exports = {
    login,
    register,
    getById
};