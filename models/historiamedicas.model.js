const mongoose = require('mongoose');

var historiamedicaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    funcionesVitales: {
        type: String,
        default:null
    },
    apetito: {
        type: String,
        default:null
    },
    sueno: {
        type: String,
        default:null
    },
    sed: {
        type: String,
        default:null
    },
    orina: {
        type: String,
        default:null
    },
    animo: {
        type: String,
        default:null
    },
    antecendentesFamiliares: {
        type: String,
        default:null
    },
    alergias: {
        type: String,
        default:null
    },
    medidcacionDeUso: {
        type: String,
        default:null
    },
    diagnostico: {
        type: String,
        default:null
    },
    examenFisico: {
        type: String,
        default:null
    },
    diagnostico: {
        type: String,
        default:null
    },
    plandeTrabajo: {
        type: String,
        default:null
    },
    tratamientos: {
        type: String,
        default:null
    },
    
    id_paciente: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "pacientes"
    },
    id_proyecto: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "proyectos"
    }
},
{timestamps:true});
mongoose.model('historiamedica', historiamedicaSchema);