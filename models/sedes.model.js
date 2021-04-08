const mongoose = require('mongoose');

var sedesSchema = new mongoose.Schema({
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
    url_imagen: {
        type: String,
        default:null        
    },
    activo:{
        type:Boolean,
        default:true
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    }
},
{timestamps:true});
mongoose.model('sedes', sedesSchema);