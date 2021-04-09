const mongoose = require('mongoose');

var recetasSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: null
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_cita: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "citas"
    }
    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('recetas', recetasSchema);