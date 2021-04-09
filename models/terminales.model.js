const mongoose = require('mongoose');

var terminalesschema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    version:{
        type:String,
        default:null
    },
    ip:{
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
mongoose.model('terminales',terminalesschema);