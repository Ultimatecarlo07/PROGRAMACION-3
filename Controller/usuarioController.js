const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM usuario', (err, usuarios) => {
if (err) {
res.json(err);
} else {
res.json(usuarios);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO usuario SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { userid } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM usuario WHERE userid = ?', [userid], (err, usuarios) => {
res.render('usuario_edit', {
data: usuarios[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { userid } = req.params;
const nuevo_userid = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE usuario SET ? WHERE userid = ?', [nuevo_userid, userid], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { userid } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM usuario WHERE userid = ?', [userid], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;