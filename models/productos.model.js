const mongoose = require('mongoose');

var productosschema = new mongoose.Schema({
    
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
    url_imagen:{
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
    },
    id_producto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos"
    },
    id_servicio: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "servicios"
    },
},
{timestamps:true});
mongoose.model('productos', productosschema);