var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profesor = require('../model/profesorModel.js'); 


router.get('/', function(req, res) {
  res.send('Api activa');
});

router.get('/profesor/add/:nombre/:apellidos/:dni/:email/:dep', function (req, res) {
	console.log(req.params);
	
	var profesor = new Profesor({
		nombre: req.params.nombre,
		apellidos: req.params.apellidos,
		dni: req.params.dni,
		email: req.params.email,
		dep: req.params.dep
	});
	
	 
	 Profesor.findOne({ dni: req.params.dni }, function(err, profesores) {
        if (err) throw err;
		if(profesores){
			res.send({status:0,desc:'profesor ya existe en la base de datos'})
		}else{
			profesor.save(function(err){
				if(err) res.send({status:0,desc:'fallo en la insercion'})
				else res.send({status:1,data:profesor}); 
			});
			
		}
	});
  
});
router.get('/profesor/get/all', function (req, res) {
	Profesor.find({}, function(err, profesores) {
        if (err) throw err;
		if(profesores){
			res.send({status:1,data:profesores})
		}
	});
  
});

router.get('/profesor/get/:nombre', function (req, res) {
	console.log(req.params);
	Profesor.find({ nombre: req.params.nombre }, function(err, profesores) {
        if (err) throw err;
		if(profesores){
			res.send({status:1,data:profesores})
		}else{
			res.send({status:0,data:[]});
			
		}
	});
  
});

module.exports = router;
