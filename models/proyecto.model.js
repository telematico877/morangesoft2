const mongoose = require('mongoose');

var proyectosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    servidor: {
        type: String,
        default: null
    },
    encargado: {
        type: String,
        default: null
    },
    activo: {
        type:Boolean,
        default:true
    }
    
},
{timestamps:true});
mongoose.model('proyectos', proyectosSchema);