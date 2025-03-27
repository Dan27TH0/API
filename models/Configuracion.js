const mongoose = require('mongoose');

const AccesoSchema = new mongoose.Schema({
    idAcceso: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const ConfiguracionSchema = new mongoose.Schema({
    dispositivo_id: { type: String, required: true },
    usuario_id: { type: String, required: true },
    accesos: { type: [AccesoSchema], default: [] } 
});

module.exports = mongoose.model('Configuracion', ConfiguracionSchema);