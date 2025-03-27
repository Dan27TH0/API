const mongoose = require('mongoose');

const HistorialCompraSchema = new mongoose.Schema({
    usuario_id: { type: String, required: true },  
    carrito_id: { type: String, required: true },  
    fecha_compra: { type: Date, required: true },  
    estado_compra: { type: String, required: true }
});

module.exports = mongoose.model('HistorialCompra', HistorialCompraSchema);