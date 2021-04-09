const mongoose = require('mongoose');

var sliderschema = new mongoose.Schema({
    
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
    id_loteria: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "loterias"
    }
},
{timestamps:true});
mongoose.model('slider', sliderschema);