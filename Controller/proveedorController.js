const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM proveedor', (err, proveedores) => {
if (err) {
res.json(err);
} else {
res.json(proveedores);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO proveedor SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idprov } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM proveedor WHERE idprov = ?', [idprov], (err, proveedores) => {
res.render('proveedor_edit', {
data: proveedores[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idprov } = req.params;
const nuevo_idprov = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE proveedor SET ? WHERE idprov = ?', [nuevo_idprov, idprov], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idprov } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM proveedor WHERE idprov = ?', [idprov], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;