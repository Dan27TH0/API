const mongoose = require('mongoose');

const CancelacionEnvioSchema = new mongoose.Schema({
    envio_id: { type: String, required: true },         
    fecha_cancelacion: { type: Date, required: true },  
    motivo: { type: String, required: true },           
    estado: { type: String, required: true }            
});

module.exports = mongoose.model('CancelacionEnvio', CancelacionEnvioSchema);