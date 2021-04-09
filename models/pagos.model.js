const mongoose = require('mongoose');

var pagosSchema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    observacion:{
        type:String,
        default:null
    },
    montopago:{
        type:Number,
        required:true
    },
    montopagoreferencia:{
        type:Number,
        default:null
    },
    montopagoeliminado:{
        type:Number,
        default:null
    }
    ,id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    },
    id_estado: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "estados"
    },
    id_cita: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "citas"
    },
    id_formapago: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "formapago"
    }, 
    id_usuario: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }
},
{timestamps:true});
mongoose.model('pagos', pagosSchema);