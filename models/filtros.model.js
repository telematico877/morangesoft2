const mongoose = require('mongoose');

var filtrosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    orden: {
        type: String,
        default:null
    },
    descripcion: {
        type: String,
        default:null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    }
},
{timestamps:true});
mongoose.model('filtros', filtrosSchema);