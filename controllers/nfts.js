const express = require('express');
const router = express.Router();
const Nfts = require('../models/nfts.js');

router.get('/', (req, res)=>{
    res.send('index');
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

router.put('/:id', (req, res)=>{
    Nfts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedNft)=>{
        res.json(updatedNft);
    });
});


module.exports = router;
