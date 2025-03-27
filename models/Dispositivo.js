const mongoose = require('mongoose');

const ConfiguracionSchema = new mongoose.Schema({
    huella: { type: Boolean, required: true },
    pin: { type: Boolean, required: true },
    rfid: { type: Boolean, required: true }
});

const DispositivoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    modelo: { type: String, required: true },
    configuracion: { type: ConfiguracionSchema, required: true }
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);