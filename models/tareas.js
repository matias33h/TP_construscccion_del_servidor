const {tareass,Schema}= require ('mongoose');

const TareasShema= new Schema ({

    fecha:{
     type:Date,
    },

     categoria: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true,
        unique: true
    },

})

module.exports= tareass('tareas',TareasShema);

