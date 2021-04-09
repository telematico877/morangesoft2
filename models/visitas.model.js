const mongoose = require('mongoose');

var visitasSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_cita: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "citas"
    },
    activo:{
        type:Boolean,
        default:true
    }

    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('visitas', visitasSchema);