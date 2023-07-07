const controller = {};

// Función para listar registros
controller.list = (req, res) => {
req.getConnection((error, conn) => {
conn.query('SELECT * FROM tipoproducto', (err, tipoproductos) => {
if (err) {
res.json(err);
} else {
res.json(tipoproductos);
}
});
});
};

// Función para guardar registros
controller.save = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
conn.query('INSERT INTO tipoproducto SET ?', [data], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para visualizar registros
controller.edit = (req, res) => {
const { idtpprod } = req.params;
req.getConnection((err, conn) => {
conn.query('SELECT * FROM tipoproducto WHERE idtpprod = ?', [idtpprod], (err, tipoproductos) => {
res.render('tipoproducto_edit', {
data: tipoproductos[0]
});
});
});
};

// Función para actualizar registros
controller.update = (req, res) => {
const { idtpprod } = req.params;
const nuevo_idtpprod = req.body;
req.getConnection((err, conn) => {
conn.query('UPDATE tipoproducto SET ? WHERE idtpprod = ?', [nuevo_idtpprod, idtpprod], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

// Función para eliminar registros
controller.delete = (req, res) => {
const { idtpprod } = req.params;
req.getConnection((err, conn) => {
conn.query('DELETE FROM tipoproducto WHERE idtpprod = ?', [idtpprod], (err, result) => {
if (err) {
console.log(err);
}
res.redirect('/');
});
});
};

module.exports = controller;