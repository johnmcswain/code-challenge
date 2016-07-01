/**
 * Created by john mcswain on 6/29/16
 * purpose: turner code challenge
 **/

/********** Express Route Event Handlers *********/


var express = require('express');
var app = express();
app.set('port', process.env.PORT || 6440);
var path = require('path');

app.get('/db', function(req, res) {
    //console.log(req.query.Title);
    var query = (req.query.TitleName)?{TitleName:req.query.TitleName}:{};
    Title.find(query, function (err, titles){
        if (!err){
            //console.log(titles);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(titles);
        }
    });
});

app.listen(app.get('port'));

/************************* Mongo DB Logic ***********************************/
var mongoose = require('mongoose');
var dbURI = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';
//mongoose.connection.collection('Titles');
mongoose.connect(dbURI);

var awardSchema = new mongoose.Schema({
    AwardWon:String,
    AwardYear:String,
    Participants:[],
    Award:String,
    AwardCompany:String
});
var otherNameSchema = new mongoose.Schema({
    TitleNameLanguage: String,
    TitleNameType: Number,
    TitleNameSortable: [],
    TitleName:Number
});
var participantNameSchema = new mongoose.Schema({
    IsKey: Boolean,
    RoleType: String,
    IsOnScreen:Boolean,
    ParticipantType:String,
    Name: String,
    ParticipantId:Number
});

var storyLineSchema = new mongoose.Schema({
    Description:String,
    Language:String,
    Type:String
});
var titleSchema = new mongoose.Schema({
    _id: String,
    TitleName: String,
    TitleId: Number,
    Storylines: [storyLineSchema],
    ReleaseYear:Number,
    Participants: [participantNameSchema],
    OtherNames: [otherNameSchema],
    Genres: [],
    Awards: [awardSchema]
});




//creating model based on titleSchema
var Title = mongoose.model('Title', titleSchema,'Titles');

//Mongoose event tracking so we'll see console statements for connection and errors
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

