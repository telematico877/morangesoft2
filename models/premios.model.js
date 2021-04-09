const mongoose = require('mongoose');

var premiosschema = new mongoose.Schema({
    
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
    valor:{
        type:Number,
        required: true
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
     id_marca: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "marcas"
    }, 
    id_modelo: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "modelos"
    }, 
    id_categoria: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorias"
    }, 
},
{timestamps:true});
mongoose.model('premios', premiosschema);