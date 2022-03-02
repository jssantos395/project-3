const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://jssantos395:Changezz1@cluster0.wwt6s.mongodb.net/Nfts'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

const db = mongoose.connection

db.on('connected', () => {
  console.log('Database connected...');
})

db.on('error', () => {
  console.log('Connection Failed...');
})

module.exports = mongoose
