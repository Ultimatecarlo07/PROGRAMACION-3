const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM sucursales', (err, sucursales) => {
if (err) {
res.json(err);
} else {
res.json(sucursales);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO sucursales SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idsuc } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM sucursales WHERE idsuc = ?', [idsuc], (err, sucursales) => {
res.render('sucursal_edit', {
data: sucursales[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idsuc } = req.params;
const nuevo_idsuc = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE sucursales SET ? WHERE idsuc = ?', [nuevo_idsuc, idsuc], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idsuc } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM sucursales WHERE idsuc = ?', [idsuc], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;