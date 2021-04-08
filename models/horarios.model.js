const mongoose = require('mongoose');

var horariosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    fechaInicial: {
        type: Date,
        required: true,
    },
    fechaFinal: {
        type: Date,
        required :true
    },
    activo:{
        type:Boolean,
        default:true
    },
    id_usuario: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    id_sede: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "sedes"
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "proyectos"
    }
},
{timestamps:true});
mongoose.model('Horarios', horariosSchema);