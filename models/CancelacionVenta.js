const mongoose = require('mongoose');

const CancelacionVentaSchema = new mongoose.Schema({
    venta_id: { type: String, required: true },           
    fecha_cancelacion: { type: Date, required: true },    
    motivo: { type: String, required: true },             
    estado_venta: { type: String, required: true }        
});

module.exports = mongoose.model('CancelacionVenta', CancelacionVentaSchema);