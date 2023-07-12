const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



 
// MongoDB Databse url
var mongoDatabase = 'mongodb+srv://Rohan:rohan123@cluster0.pmaud0g.mongodb.net/?retryWrites=true&w=majority';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);

// All the express routes
const eventRoutes = require('../server/api');

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 4000;

// Routes Configuration
app.use('/eventhub', eventRoutes);

// Staring our express server
const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
});