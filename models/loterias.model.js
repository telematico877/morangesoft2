const mongoose = require('mongoose');

var loteriasSchema = new mongoose.Schema({
    
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
    proveedor:{
        type:String,
        default:null 
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_categoria:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorias"
    },
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    }
},
{timestamps:true});
mongoose.model('loterias', loteriasSchema);