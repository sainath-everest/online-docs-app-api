const express = require('express');
const routes = require('./routes/router');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//set up express app
const app = express();

//connect to mango db
mongoose.connect('mongodb://localhost/test-db');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(cors());
//initialize routes
app.use('/api',routes);

app.use(function(err,req,res,next){
    res.send({error : err.message});
});


app.listen(8080,function(){
    console.log('now listening for requests');
});
