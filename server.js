const express = require('express');
const app = express();
const mongoose = require('mongoose');

const nftsController = require('./controllers/nfts.js');
app.use('/nfts', nftsController);

app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect('mongodb://127.0.0.1:27017/merncrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
