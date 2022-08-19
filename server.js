const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const commonConfig = require('./config/common.config');
const indexRouter = require('./routes/index');

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse requests of content-type: application/json
app.use(bodyParser.json({limit: '50mb'}));

// index route 
app.get('/', (req, res)=> {
    res.json({message: 'Welcome to Carles Robotics.'});
});

// api routes 
app.use('/api/',indexRouter);

//  catch 404 and forward to error handler 
app.use(function(req, res, next){
    res.status(404).json({status: false, message: '404! Not Found'});
});

// error handler
app.use(function(err, req, res, next){
    res.status(500).json(err);
});

//  listen to port 7000 
app.listen(process.env.PORT || '7000', ()=>{
    console.log(`Server is running on port: ${process.env.PORT || '7000'}`);
});
