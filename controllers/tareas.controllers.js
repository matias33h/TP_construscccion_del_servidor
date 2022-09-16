const tarea=require("../models/tareas")

const ctrlTareas={}

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlTareas.getTareas = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tareas = await tarea.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tareas)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTareas.postTareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUser = new User({
        username,
        password,
        email
    });

    // Se almacena en la base de datos con método asícrono .save()
    const tarea = await newUser.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Usuario creado correctamente',
        tarea
    });
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlTareas.putTareas = async (req, res) => {
    return res.json({
        msg: ''
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlTareas.deleteTareas = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlTareas;