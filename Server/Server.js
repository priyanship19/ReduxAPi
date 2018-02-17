var express = require('express');
var mongoose = require('mongoose');
var empModel=require('../ModelEmployee/EmployeeModel');
var bodyparser = require('body-parser');
var port = require('../Config/PortConfig')
var route=require('../Route/EmpRoute');
var app=express();
app.use(bodyparser.json());
route(app);
app.listen(port,() =>{
    console.log('Port connected');
})