const mongoose = require('mongoose');

var pacientesSchema = new mongoose.Schema({
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
    documento: {
        type: String,
        default: null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_cita: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "citas"
    },
    activo:{
        type:Boolean,
        default:true
    }

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('pacientes', pacientesSchema);