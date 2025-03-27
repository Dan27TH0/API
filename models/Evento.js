const mongoose = require('mongoose');


const EventoSchema = new mongoose.Schema({
    dispositivo_id: { type: String, required: true }, 
    tipo_evento: { type: String, required: true },   
    fecha: { type: Date, required: true },           
    descripcion: { type: String, required: true }    
});

module.exports = mongoose.model('Evento', EventoSchema);