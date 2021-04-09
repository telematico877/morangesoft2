const mongoose = require('mongoose');

var modulosSchema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    descripcion:{
        type:String,
        default:null
    },
    precio:{
        type:Number,
        required:true
    },
    url_imagen:{
        type:Number,
        required:true
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    }
},
{timestamps:true});
mongoose.model('modulos',modulosSchema);