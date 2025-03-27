const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    producto_id: { type: String, required: true }, 
    cantidad: { type: Number, required: true } 
});

// Esquema principal para Carrito
const CarritoSchema = new mongoose.Schema({
    usuario_id: { type: String, required: true },             
    productos: { type: [ProductoSchema], default: [] },       
    fecha: { type: Date, required: true }                    
});

module.exports = mongoose.model('Carrito', CarritoSchema);