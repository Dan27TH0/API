const mongoose = require('mongoose');

const ContactoSchema = new mongoose.Schema({
    nombre_usuario: { type: String, required: true }, 
    email: { type: String, required: true }, 
    mensaje: { type: String, required: true },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Contacto', ContactoSchema);