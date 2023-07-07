const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM producto', (err, productos) => {
if (err) {
res.json(err);
} else {
res.json(productos);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO producto SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { num_prod } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM producto WHERE num_prod = ?', [num_prod], (err, productos) => {
res.render('producto_edit', {
data: productos[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { num_prod } = req.params;
const nuevo_num_prod = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE producto SET ? WHERE num_prod = ?', [nuevo_num_prod, num_prod], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { num_prod } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM producto WHERE num_prod = ?', [num_prod], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;