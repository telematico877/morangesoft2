const mongoose = require('mongoose');

var especialidadSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    codigo_externos: {
        type: String,
        default: null
    },
    url_imagen: {
        type: String,
        default: null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_sede: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "sedes"
    },
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    },

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('especialidad', especialidadSchema);