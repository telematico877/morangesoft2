const mongoose = require('mongoose');

var cuponesSchema = new mongoose.Schema({
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
    fecha_inicio: {
        type: Date,
        default: null
    },
    fecha_final: {
        type: Date,
        default: null
    },
    monto :{
        type:Number,
        required: true
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    activo:{
        type:Boolean,
        default:true
    }
    //no funciona la api en heroku revisa telegram
},
{timestamps:true});
mongoose.model('cupones', cuponesSchema);