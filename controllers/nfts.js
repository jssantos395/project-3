const express = require('express');
const router = express.Router();
const Nfts = require('../models/nfts.js');

router.get('/', (req, res)=>{
    res.send(req.body);
});

router.post('/', (req, res)=>{
    Nfts.create(req.body, (err, createdNft)=>{
        res.json(createdNft);
    });
});

router.delete('/:id', (req, res)=>{
    Nfts.findByIdAndRemove(req.params._id, (err, deletedNft)=>{
        res.json(deletedNft);
    });
});


module.exports = router;
