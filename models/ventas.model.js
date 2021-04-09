const mongoose = require('mongoose');

var ventasschema = new mongoose.Schema({
    
    codigo: {
        type: String,
        required: true
    }, 
    nombre:{
        type:String,
        default:null
    },
    valor:{
        type:Number,
        required: true
    },
    id_producto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos"
    },
    id_categoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorias"
    },
    id_cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "clientes"
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
mongoose.model('ventas', ventasschema);