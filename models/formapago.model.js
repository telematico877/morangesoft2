const mongoose = require('mongoose');

var formapagoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
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
mongoose.model('formapagos', formapagoSchema);