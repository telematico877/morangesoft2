const mongoose = require('mongoose');

var jugadasSchema = new mongoose.Schema({
    
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
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    precio:{ 
        type:Number,
        required: true
    },
    comision:{ 
        type:Number,
        required: true
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
mongoose.model('jugadas', jugadasSchema);