const mongoose = require('mongoose');

const PoliticasSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true }, 
    fecha: { type: Date, required: true }  
});

module.exports = mongoose.model('Politicas', PoliticasSchema);