const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');
// slash means home
// get is what everyone sees
router.get('/', function(req, res){
	burger.selectAll(function(data) {
		const burgerObject = {
			burgers: data
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
})

module.exports = router;