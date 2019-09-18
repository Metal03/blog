'use strict'

var mongoose = require('mongoose');
var app = require('./app'); 
var port = process.env.PORT || 3999; 

mongoose.connect('mongodb://localhost:27017/blog-nodejs', {useNewUrlParser: true})
				.then(() => {
					console.log('La conecion a la base de datos se ha realizado correctamente');	

					//Crear el servidor
					app.listen(port, () => {
						console.log('El servidor htpp://localhost:3999 esta funcionando !!!')
					});
				})
				.catch(error => console.log(error));