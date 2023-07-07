const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM tipousuario', (err, tipousuarios) => {
if (err) {
res.json(err);
} else {
res.json(tipousuarios);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO tipousuario SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idtpusuario } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM tipousuario WHERE idtpusuario = ?', [idtpusuario], (err, tipousuarios) => {
res.render('tipousuario_edit', {
data: tipousuarios[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idtpusuario } = req.params;
const nuevo_idtpusuario = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE tipousuario SET ? WHERE idtpusuario = ?', [nuevo_idtpusuario, idtpusuario], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idtpusuario } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM tipousuario WHERE idtpusuario = ?', [idtpusuario], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;