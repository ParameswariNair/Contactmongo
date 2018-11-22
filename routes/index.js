var express = require('express');
var router = express.Router();
var Heros = require('../models/hero');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Super Heroes' });
});

router.get('/saveData', function(req, res, next) {
 Heros.saveNew(req.query)
  .then(function(){
  	res.redirect('/getAllHeros')
  })
   
   .catch(console.log('ERR :: err in resolving the promise'))

});

router.get('/deleteRow', function(req, res, next) {
 Heros.deleteRow(req.query)
  .then(function(){
  	res.redirect('/getAllHeros')
  })
   
   .catch(console.log('ERR :: err in resolving the promise'))

});

router.get('/getAllHeros', function(req, res, next) {
	Heros.getAll()
	 .then(function(retVal){
	 	res.render('heros',{data : retVal})
	 })
  .catch( console.log('ERR :: error in resolving the promise'))
});

router.get('/viewRow', function(req, res, next) {
 Heros.viewRow(req.query)
  .then(function(retVal){
  	 res.render('view',{data: retVal})
  })
   
   .catch(console.log('ERR :: err in resolving the promise'))

});




module.exports = router;
