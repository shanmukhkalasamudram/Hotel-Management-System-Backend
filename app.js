const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();


mongoose.connect('mongodb+srv://taskapp:kvss%401199@cluster0.oqq9w.mongodb.net/hotel?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

const pub = "pk_test_51Jz12dSJ2eWjf7S9udbLfEQUAtJegO66OynEcjLkWBnnniu2PceGxOKO4XqVyDVXKGsXVhmT1UGtIK7760pB850200zjpzLiZw"

const secret = "sk_test_51Jz12dSJ2eWjf7S9wH0BnIsi3qerOrr7EKhyVRYhYRC66zzEwA0yQACAG2YffaaMLNxpQ1BfsG2sYzaOaZ8TGqpZ008KckcSoL"
const stripe = require('stripe')(secret) 

// MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



app.use(bodyParser.json());
const port = 8000;
app.use(express.Router().get('/', (req, res) => {res.send('<h1>Working</h1>');}));
app.use('/', require('./routes/hotelbooking'));
app.use('/', require('./routes/userbookings'));
app.use('/', require('./routes/roomslist'));
app.use('/', require('./routes/userAuth'));



//for error
app.use((err, req, res, next) => {
    res.status(420).send({error: err.message});
});

app.listen(port, () => {
    console.log(`Running  on: ` + port)
});