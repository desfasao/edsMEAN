var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfesorSchema = new Schema({
								nombre:{type:"string", required:true},
								apellidos:{type:"string", required:true},
								dni:{type:"string", required:true, index :{unique:true}},
								dep:{type:"string", required:false},
								email:{type:"string",required:true}
							});
							
ProfesorSchema.methods.isValid = function(profesor){
	// Aqui podemos comprobar si es valido el  profesor introducido por parametro, es un metodo estatico, ya estariamos comprobando los no nulos con el esquema
	var dniPattern = /(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))/;
	var emailPattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
	if(dniPattern.test(profesor.dni) && emailPattern.test(profesor.email)){
		return true;
	}
	return false;
}

ProfesorSchema.methods.getDep = function(){
	if(this.dep != ''){
		return this.dep;
	}else{
		return "Sin departamento asignado";
	}
}

ProfesorSchema.pre('save', function(next) {
    var profesor = this;

    // only hash the password if it has been modified (or is new)
    if (this.isValid(this)) return next();	
	else console.log({status:0,desc:"Formato de profesor no valido"});

});

module.exports = mongoose.model('ProfesorSchema', ProfesorSchema);