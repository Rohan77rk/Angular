const mongoose = require('mongoose');


// List of columns for Employee schema
let Batches = new mongoose.Schema({

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
 collection: "Batches"
});

module.exports = mongoose.model('Batches', Batches);