const express= require('express');
const path= require('path');
const morgan = require('morgan');
const app= express();
//importar rutas
const formapagoRoutes = require('./Routes/formapago');
//const formapagoRoutes = require('./routes/paisesR');

//middlewares
app.use(morgan('dev'));
var Connection = require('tedious').Connection; 
var config = { 
server: 'CARLOS_RIVERA\SQLEXPRESS', 
authentication: {
type: 'default',
options: {
userName: 'car02', 
password: 'car02' 
}
},
options: {
encrypt: true,
database: 'ventas2' 
}
};

var connection = new Connection(config); 
connection.on('connect', function(err) { 
console.log("Ingreso"); 
});

connection.connect();

app.listen(app.get('port'), () =>{
console.log("PUERTO 3000");
});