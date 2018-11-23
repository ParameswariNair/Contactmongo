var express = require('express');
var fs = require("fs");
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contact = new Schema({
  id: ObjectId,
  name: String,
  phoneNo: String
  
});

const myModel= mongoose.model('contact',contact);  
let Heroes= {}

Heroes.getAll = function(){
 return new Promise (function(resolve, reject){	
   const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
   console.log(connection);
  myModel.find({},function(err, contact){   //displays the table rows

  	if(err)
  	{
  		console.log(err);
  		console.log('ERR :: fetching data from datbase.');
  	}
  	else
  	{
  		console.log(contact);
  		//console.log(fields);
  		resolve(contact);  
  	}
   });
  });
  }

  Heroes.saveData = function(newHeroData){
 return new Promise (function(resolve, reject){ 
   const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
   console.log(connection);

   var newUser= myModel({
     name:`${newHeroData.name}`,
     phoneNo: `${newHeroData.phoneNo}`
   });


   console.log('newUser' + newUser)
  newUser.save({},function(err, contact){  

    if(err)
    {
      console.log(err);
      console.log('ERR :: fetching data from datbase.');
      reject();
    }
    else
    {
      console.log(contact);
      //console.log(fields);
      resolve(contact);  
    }
   });
  });
  }

  Heroes.deleteRow = function(newHeroData){
  return new Promise(function(resolve,reject){
    const connection =mongoose.connect('mongodb://127.0.0.1:27017/myDB');
    console.log(connection);
    myModel.findOneAndRemove({name : `${newHeroData.name}`}, function(err){
    if (err) {
      console.log(err);
      console.log('ERR :: fetching data from database.');
      reject();
    }
    else {
      //console.log(result);
      console.log(contact);
      resolve(contact);
    }
   
});
});  

}


module.exports = Heroes;