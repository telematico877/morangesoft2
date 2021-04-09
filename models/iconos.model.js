const mongoose = require('mongoose');

var iconosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    nombre:{
        type:String,
        required: true
    },
    url_imagen:{
        type:String,
        default:null
    },
    descripcion:{
        type:String,
        default:null
    },
    id_estado:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    }

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('iconos', iconosSchema);