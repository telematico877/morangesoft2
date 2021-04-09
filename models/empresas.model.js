const mongoose = require('mongoose');

var empresasSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    ruc: {
        type: String,
        default:null
    },
    descripcion: {
        type: String,
        default:null
    },
    url_imagen: {
        type: String,
        default:null        
    },
    url_imagen_fondo: {
        type: String,
        default:null
    },
    api_key: {
        type: String,
        default:null
    },
    api_secret: {
        type: String,
        default:null
    },
    membresia_fecha_inicio: {
        type: Date,
        default:Date.now
    },
    membresia_fecha_exp: {
        type: Date,
        default:Date.now
    },
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    }
},
{timestamps:true});
mongoose.model('Empresas', empresasSchema);