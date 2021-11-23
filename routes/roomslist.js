const express = require('express');
const router = express.Router();


/*



Admin Module

*/

const Room = require('../models/roomDB');
const Hotel = require('../models/hotelDB');
const { populate } = require('../models/roomDB');
router.post('/rooms', (req, res, next) => {
    Room.create(req.body)
    
    .then( room => {
        res.send(room);
    }).catch(next);
});

router.put('/rooms/:id', (req, res, next) => {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Room.findOne({_id: req.params.id})
        .then( room => {
            res.send(room);
        });
    });
});

router.delete('/rooms/:id', (req, res, next) => {
    Room.findByIdAndRemove({_id: req.params.id})
    .then( room => {
        res.send(room);
    });
});


/*

Customer Module

*/

router.get('/rooms', (req, res, next) => {
    Room.find({hotel: req.body.hotel})
    .then( rooms => res.send(rooms) );
});

module.exports = router;