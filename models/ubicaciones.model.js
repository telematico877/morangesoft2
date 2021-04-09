const mongoose = require('mongoose');

var ubicacionesschema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    telefono:{
        type:String,
        default:null
    },
    direccion: { 
        type:String,
        default:null
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
mongoose.model('ubicaciones', ubicacionesschema);