const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js')

router.post('/register', (req, res) => {
    const { password } = req.body
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body).then(() => {
        res.json({ success: true })
    }
    ).catch(err => {
        res.status(500).send({ status: "Error upon register", error: err.message })
    })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    userServices.login({ username, password }).then(user => {
        user ? res.json(user) : res.json({ error: 'Username or password is incorrect' });
    }
    ).catch(err => {
        res.status(500).send({ status: "Error upon login", error: err.message });
    })
})

router.get('/:id', (req, res) => {
    userServices.getById(req.params.id).then((user) => {
        res.json(user)
    }
    ).catch(err => res.status(500).send({ status: "Error upon login", error: err.message }))
})

module.exports = router;