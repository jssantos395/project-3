const express = require('express');
const app = express();

const nftsController = require('./controllers/nfts.js');
app.use('/nfts', nftsController);

app.listen(3000, ()=>{
    console.log('listening...');
});
