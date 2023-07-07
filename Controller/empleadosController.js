const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM empleados', (err, empleados) => {
if (err) {
res.json(err);
} else {
res.json(empleados);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO empleados SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idemp } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM empleados WHERE idemp = ?', [idemp], (err, empleados) => {
res.render('empleados_edit', {
data: empleados[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idemp } = req.params;
const nuevo_idemp = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE empleados SET ? WHERE idemp = ?', [nuevo_idemp, idemp], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idemp } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM empleados WHERE idemp = ?', [idemp], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;