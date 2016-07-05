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
        titleSchema.set('redisCache',true);
        titleSchema.set('expires',24*60*60); //cache for a day
        this.model = mongoose.model('Title', titleSchema,'Titles');
        return this;
    },
    instance: function (){

        return this.model;
    }
};

var mongoose = require('mongoose');
var mongooseRedisCache = require("mongoose-redis-cache");


 mongooseRedisCache(mongoose, {
     //Ideally, this information would be in a separate config file, along
     //with environmental settings and the like, but for simplicity sake...
//PROD
     host: "ec2-54-243-217-112.compute-1.amazonaws.com",
     port: "14249",
     pass: "pdpuc56lakiki1a2dji1bdu4d74"
 /*
 //DEV
    host: "ec2-54-225-115-56.compute-1.amazonaws.com",
    port: "28679",
    pass: "pcvbbpcqjnoajr2s55nhqfc93oh"

   */
});
