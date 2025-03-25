const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    calle: String,
    colonia: String,
    ciudad: String,
    estado: String,
    codigo_postal: String
});

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido_paterno: { type: String, required: true },
    apellido_materno: String,
    usuario: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: String,
    direccion: addressSchema,
    rol: { type: String, enum: ['admin', 'user'], default: 'user' },
    fecha_registro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);