const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM areas_trabajo', (err, areas_trabajo) => {
if (err) {
res.json(err);
} else {
res.json(areas_trabajo);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO areas_trabajo SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idarea } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM areas_trabajo WHERE idarea = ?', [idarea], (err, areas_trabajo) => {
res.render('areas_trabajo_edit', {
data: areas_trabajo[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idarea } = req.params;
const nuevo_idarea = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE areas_trabajo SET ? WHERE idarea = ?', [nuevo_idarea, idarea], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idarea } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM areas_trabajo WHERE idarea = ?', [idarea], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;