const express = require('express');
const router = express.Router();
/*

Admin Module

Inserting Hotels and Rooms of each Hotel

*/
const Hotel = require('../models/hotelDB');
//Admin Module
router.post('/hotels', (req, res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.send(hotel);
    }).catch(next);
});
router.get('/hotels', (req, res, next) => {
    Hotel.find({name: req.body.name})
    .populate('rooms')
    .exec( (err, hotels) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(hotels) }
    });
});
router.put('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.send(hotel);
        });
    });
});
router.delete('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndRemove({_id: req.params.id})
    .then( hotel => {
        res.send(hotel);
    });
});

module.exports = router;