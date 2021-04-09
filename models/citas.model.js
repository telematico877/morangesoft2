const mongoose = require('mongoose');

var ccitasSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_paciente: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "pacientes"
    }
    ,
    id_medico: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "medicos"
    },
    id_consultorio: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "consultorio"
    },
    activo:{
        type:Boolean,
        default:true
    },
    id_usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('citas', ccitasSchema);