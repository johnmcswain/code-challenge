/**
 * Created by john mcswain on 6/29/16
 * purpose: turner code challenge
 **/

/************************* Mongo DB Logic ***********************************/

module.exports.MongoTitleModel = {
    init: function (){
        console.log('initialized');
        var dbURI = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';
        mongoose.connect(dbURI);

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
        return this;
    },
    instance: function (){
        return mongoose.model('Title', titleSchema,'Titles');
    }
};


var mongoose = require('../node_modules/mongoose');
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