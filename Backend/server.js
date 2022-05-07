const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const unless = require('express-unless')
const auth = require('./src/helpers/jwt');
const users = require('./src/controllers/UserController')
const errors = require('./src/helpers/errorHandler')

const port = 4000;

const URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());



mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindandModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

// auth.authenticateToken.unless = unless
// app.use(auth.authenticateToken.unless({
//     path: [
//         { url: '/users/login', methods: ['POST'] },
//         { url: '/users/register', methods: ['POST'] }
//     ]
// }))

app.use('/users', users) // middleware for listening to routes
app.use(errors.errorHandler);


const hotelRoomsRouter = require("./src/routes/hotelRoomRoutes");
app.use("/rooms", hotelRoomsRouter);


const paymentsRouter = require("./src/routes/paymentRoutes");
app.use("/payments", paymentsRouter);


const taxiRouter = require("./src/routes/taxiRoutes");
app.use("/taxis", taxiRouter);

app.listen(port, () => {
    console.log(`Server Is Running on Port: ${port}`);
})



