const mongoose = require('mongoose');

var laboratoriosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    valor:{
        type:Number,
        required: true
     } ,
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    },
    id_loteria: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "loterias"
    },
    id_ticket: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "tickets"
    },
    descripcion:{
        type:String,
        default:null
    }
},
{timestamps:true});
mongoose.model('laboratorios', laboratoriosSchema);