var express = require('express');

var mysql = require('mysql2');

    
let Heros= {}
Heros.getAll = function(){
 return new Promise (function(resolve, reject){	
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'db',
   password: 'ccs#1234'
   });
   let query= 'select *from comic where is_valid = 1';  
  connection.query(query,function(err, result, fields){   //displays the table rows

  	if(err)
  	{
  		console.log(err);
  		console.log('ERR :: fetching data from datbase.');
  	}
  	else
  	{
  		//console.log(result);
  		//console.log(fields);
  		resolve(result);  
  	}
   });
  });
  }
Heros.saveNew = function(newHeroData)
 {
   return new Promise (function(resolve, reject){ 
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'db',
   password: 'ccs#1234'
   });
   let query= `insert into comic(superhero, publisher, alter_ego, first_appearance, characters, is_valid, update_time)values ('${newHeroData.superhero}', '${newHeroData.publisher}', '${newHeroData.alter_ego}', '${newHeroData.first_appearance}','${newHeroData.characters}','1','${new Date()}')`;  
  connection.query(query,function(err, result, fields){   //displays the table rows

    if(err)
    {
      console.log(err);
      console.log('ERR :: fetching data from datbase.');
    }
    else
    {
      resolve();  
    }

   });
  });

  }

  Heros.deleteRow = function(newHeroData)
 {
   return new Promise (function(resolve, reject){ 
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'db',
   password: 'ccs#1234'
   });
   let query= `update comic set is_valid =0 where id= ${newHeroData.id}`;
  connection.query(query,function(err, result, fields){   //displays the table rows

    if(err)
    {
      console.log(err);
      console.log('ERR :: fetching data from datbase.');
    }
    else
    {
      resolve();  
    }

   });
  });

  }
  Heros.viewRow = function(newHeroData){
   return new Promise (function(resolve, reject){ 
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db',
    password: 'ccs#1234'
   });
   let query= `select * from comic where id= ${newHeroData.id}`;  
  connection.query(query,function(err, result, fields){   

    if(err)
    {
      console.log(err);
      console.log('ERR :: fetching data from datbase.');
    }
    else
    {
      resolve(result);  
    }
   });
  });
  }


module.exports = Heros;