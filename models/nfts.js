const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    name: String,
    age: String,
    job_title: String,
    mobile: String,
    location: String,
    description: String
});

const Nfts = mongoose.model('Nft', nftSchema);

module.exports = Nfts;

// For Postman
// {
//     'name': 'Mutant Ape',
//     'varients': ['small', 'medium', 'large'],
//     'prices': [{'small': '200'}],
//     'category': 'medium',
//     'image': 'medium',
//     'description': 'medium'
// }
