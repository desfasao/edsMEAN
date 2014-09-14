var mongoose = require('mongoose');
var Profesor = require('../model/profesorModel.js'); 
var connStr = 'mongodb://localhost:27017/eds-test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
// create a user a new user
var testProfesor = new Profesor({
    nombre: 'jmar777',
    apellidos: 'Pasdasdasdasasdasdsdaasd3'
});

testProfesor.save(function(err) {
    if (err) console.log(err) ;

    // fetch user and test password verification
	else console.log(this);
});
var testProfesor3 = new Profesor({
    nombre: 'jmar777',
    apellidos: 'Password123',
	email: 'asdadasdasasdadasddasd.com',
	dni:'12312332F'	
});

testProfesor3.save(function(err) {
    if (err) console.log(err) ;

    // fetch user and test password verification
	else console.log(this);
});

var testProfesor2 = new Profesor({
    nombre: 'jmar777',
    apellidos: 'Password123',
	email: 'asdadasdasasdadasdas@asdasdasd.com',
	dni:'12312332F'	
});

testProfesor2.save(function(err) {
    if (err) console.log(err) ;

    // fetch user and test password verification
	else console.log(this);
});