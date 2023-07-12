const mongoose = require('mongoose');


// List of columns for Employee schema
let specialAdmission = new mongoose.Schema({

 FirstName: {
 type: String
 },
 LastName: {
 type: String
 },
 PhoneNumber: {
 type: Number
 },
 Email :{
    type : String
 },
 Education : {
    type : String
 },
 Address : {
    type : String
 },
 Batch : {
    type : String
 }
},{
 collection: "specialAdmission"
});

module.exports = mongoose.model('specialAdmission', specialAdmission);