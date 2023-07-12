const mongoose = require('mongoose');


// List of columns for Employee schema
let SpecialBatches = new mongoose.Schema({

 name: {
 type: String
 },
 description: {
 type: String
 },
 Teacher: {
 type: String
 }
},{
 collection: "SpecialBatches"
});

module.exports = mongoose.model('SpecialBatches', SpecialBatches);