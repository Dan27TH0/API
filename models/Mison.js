const mongoose = require('mongoose');

const MisionSchema = new mongoose.Schema({
    contenido: { type: String, required: true }, 
    fecha: { type: Date, required: true }       
});

module.exports = mongoose.model('Mision', MisionSchema);