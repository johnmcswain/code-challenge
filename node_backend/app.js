/**
 * Created by john mcswain on 6/29/16
 * purpose: turner code challenge
 **/

/********** Express Route Event Handlers *********/

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 6440);

app.get('/db', function(req, res) {
    //console.log(req.query.Title);
    var query = (req.query.TitleName)?{TitleName:req.query.TitleName}:{};

    mongoTitleModel.instance().find(query, function (err, titles){
        if (!err){
            res.header("Access-Control-Allow-Origin", "*");
            res.send(titles);
        }
    });

/*
    mongoTitleModel.instance().find(query).cache(86400).exec(function (err, titles){
        if (!err){
            res.header("Access-Control-Allow-Origin", "*");
            res.send(titles);
        }
    });
*/
});
app.listen(app.get('port'));

/************************* Mongo DB Logic ***********************************/
var mongoTitleModel = require('./db_modules/schema.js').MongoTitleModel;
mongoTitleModel.init();
var mongoose = require('mongoose');


