const mongoose = require('mongoose');

var sorteosschema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    valor:{
        type:Number,
        default:0
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
    }
},
{timestamps:true});
mongoose.model('sorteos', sorteosschema);