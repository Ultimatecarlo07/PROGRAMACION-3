const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM empresa', (err, empresas) => {
if (err) {
res.json(err);
} else {
res.json(empresas);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO empresa SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idempresa } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM empresa WHERE idempresa = ?', [idempresa], (err, empresas) => {
res.render('empresa_edit', {
data: empresas[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idempresa } = req.params;
const nuevo_idempresa = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE empresa SET ? WHERE idempresa = ?', [nuevo_idempresa, idempresa], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idempresa } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM empresa WHERE idempresa = ?', [idempresa], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;