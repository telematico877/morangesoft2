const mongoose = require('mongoose');

var usuariosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    correo:{
        type: String,
        default: null

    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_rol: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    }
 
},
{timestams:true});
mongoose.model('usuarios', usuariosSchema);