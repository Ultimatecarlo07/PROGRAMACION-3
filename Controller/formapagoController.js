const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
req.getConnection((error,conn) =>{
conn.query('select *from formapago',(err,formapago) =>{
if(err){
res.json(err);
}
});
});
};

//Funcion para guardar registros
controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=> {
    conn.query('insert into formapago set?', [data], (err,formapago) => {
    console.log(formapago);
    res.redirect('/');
    });
    })
    };

    //Funcion para visualizar registros
    controller.edit = (req, res) => {
    const {idfpago}= req.params;
    req.getConnection((err,conn) =>{
    conn.query('select *from formapago where idfpago=?', [idfpago], (err,formapago) => {
    res.render('formapago_edit', {
    data: formapago[0]
    } );
    });
    });
    };
    //Funcion para actualizar
controller.update = (req,res) =>{
    const {idfpago}= req.params;
    const nuevo_idfpago = req.body;
    req.getConnection((err, conn) => {
    conn.query('update formapago set ? where idfpago =?', [nuevo_idfpago, idfpago], (err,rows) =>{ 
    res.redirect('/');
    });
    });
    };
    //Funcion para Eliminar registros
    controller.delete = (req,res) =>{
    const {idfpago}= req.params; 
    req.getConnection((err,conn) => {
    conn.query('delete from formapago where idfpago =?', [idfpago], (err, rows) => {
    res.redirect('/');
    });
    })
    };
    module.exports =controller