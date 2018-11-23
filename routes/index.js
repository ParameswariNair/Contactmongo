var express = require('express');
var router = express.Router();
var Heroes=require('../models/hero.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Application' });
});

router.get('/getAllHeros', function(req, res, next) {
	Heroes.getAll()
	.then(function(retVal){
		console.log(retVal);
		res.render('heros', {data :retVal})
	})
	.catch( console.log('ERR :: in resolving the promice'))
});
router.get('/saveData', function(req, res, next) {
	Heroes.saveData(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/deleteRow', function(req, res, next) {
	Heroes.deleteRow(req.query)
	.then(function(){
		res.redirect('/getAllHeros')
	})
	.catch( console.log('ERR :: in resolving the promice'))
});


module.exports = router;