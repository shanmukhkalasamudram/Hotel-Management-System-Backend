const express = require('express');
const router = express.Router();
const pub = "pk_test_51Jz12dSJ2eWjf7S9udbLfEQUAtJegO66OynEcjLkWBnnniu2PceGxOKO4XqVyDVXKGsXVhmT1UGtIK7760pB850200zjpzLiZw"
const secret = "sk_test_51Jz12dSJ2eWjf7S9wH0BnIsi3qerOrr7EKhyVRYhYRC66zzEwA0yQACAG2YffaaMLNxpQ1BfsG2sYzaOaZ8TGqpZ008KckcSoL"
const stripe = require('stripe')(secret) 

const Booking = require('../models/bookingDB');
router.get('/book', (req, res, next) => {
    Booking.find({hotel: req.body.hotel})
    .then( rooms => res.send(rooms) );
});
router.post('/book', (req, res, next) => {
    Booking.create(req.body)
    .then( booking => {
        res.send(booking);
    }).catch(next);
});



router.post('/payment', function(req, res){ 

    
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: "shanmukh", 
       
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 7000,    
            currency: 'USD', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.send("Success")  
    }) 
    .catch((err) => { 
        res.send(err)     
    }); 
})

module.exports = router;