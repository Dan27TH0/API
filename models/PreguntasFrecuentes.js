const mongoose = require('mongoose');

const PreguntasFrecuentesSchema = new mongoose.Schema({
    pregunta: { type: String, required: true },   
    respuesta: { type: String, required: true }, 
    categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('PreguntasFrecuentes', PreguntasFrecuentesSchema);