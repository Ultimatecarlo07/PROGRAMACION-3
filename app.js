const express= require('express');
const path= require('path');
const morgan = require('morgan');

const app= express();
const port = 3000; // 



//importar rutas
const formapagoRoutes = require('./Routes/formapago');
const areas_trabajoRoutes = require('./Routes/areas_trabajo');
const clientesRoutes = require('./Routes/clientes');
const empleadosRoutes = require('./Routes/empleados');
const empresaRoutes = require('./Routes/empresa');
const productoRoutes = require('./Routes/producto');
const proveedorRoutes = require('./Routes/proveedor');
const sucursalesRoutes = require('./Routes/surcusales');
const tipoproductoRoutes = require('./Routes/tipoproducto');
const tipousuarioRoutes = require('./Routes/tipousuario');
const usuarioRoutes = require('./Routes/usuario');


app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

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
app.get('/', function(req, res) {
    res.render('usuarios');
});
//inicializando el server

app.listen(app.get('port'), () =>{
console.log("PUERTO 3000");
});
