const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM clientes', (err, clientes) => {
if (err) {
res.json(err);
} else {
res.json(clientes);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO clientes SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { num_clie } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM clientes WHERE num_clie = ?', [num_clie], (err, clientes) => {
res.render('clientes_edit', {
data: clientes[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { num_clie } = req.params;
const nuevo_num_clie = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE clientes SET ? WHERE num_clie = ?', [nuevo_num_clie, num_clie], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { num_clie } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM clientes WHERE num_clie = ?', [num_clie], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;