const mongoose = require('mongoose');

var medicosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        default: null
    },
    telefono: {
        type: String,
        default: null
    },
    correo: {
        type: String,
        default: null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_especialidad: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "especialidad"
    },
    activo:{
        type:Boolean,
        default:true
    }

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('medicos', medicosSchema);