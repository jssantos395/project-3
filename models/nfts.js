const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    name: String,
    amount: [Number],
    prices: [{String: Number}],
    image: String,
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
