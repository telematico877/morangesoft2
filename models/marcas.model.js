const mongoose = require('mongoose');

var marcasschema = new mongoose.Schema({
    
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
    url_imagen_fondo:{
        type:String,
        default:null
    },
    tamano:{
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
     id_categoria: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorias"
    }
},
{timestamps:true});
mongoose.model('marcas', marcasschema);