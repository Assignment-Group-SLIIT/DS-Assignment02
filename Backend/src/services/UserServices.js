const User = require('../models/UserModels')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')
let moment = require("moment")

async function login({ username, password }) {
    const user = await User.findOne({ username });

    // synchronously compare user entered password with hashed password
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = auth.generateAccessToken(username);

        // call toJSON method applied during model instantiation
        return { ...user.toJSON(), token }
    } else {
        console.log("ERROR")
    }
}

async function register(params) {
    // instantiate a user modal and save to mongoDB
    const user = new User(params)
    await user.save().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

async function getById(id) {

    const user = await User.findById(id);
    // call toJSON method applied during model instantiation
    return user.toJSON()
}

async function updatePassword(email, newPassword) {
    const user = await User.findOne({ email });

    const salt = bcrypt.genSaltSync(10);
    const updatePassword = bcrypt.hashSync(newPassword, salt);

    const newUser = {
        username: user.username,
        email: user.email,
        password: updatePassword,
        role: user.role,
        date: moment(new Date()).format("YYYY-MM-DD")

    }

    const update = await User.findOneAndUpdate({ email: email }, newUser)
        .then(() => {
            return user.toJSON()//sending details of the updated data back to front end
        }).catch((err) => {
            console.log(err);

        })
}

module.exports = {
    login,
    register,
    getById,
    updatePassword
};