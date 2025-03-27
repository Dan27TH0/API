const mongoose = require('mongoose');

const MetodoPagoSchema = new mongoose.Schema({
    metodo_id: { type: String, required: true },       
    fecha_pago: { type: Date, required: true },        
    detalles: {
        tarjeta: {
            marca: { type: String, required: true },  
            ultimos_4_digitos: { type: String, required: true } 
        }
    }
});


const ProductoSchema = new mongoose.Schema({
    producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    cantidad: { type: Number, required: true }   
});

// Esquema principal para Venta
const VentaSchema = new mongoose.Schema({
    usuario_id: { type: String, required: true },       
    fecha_venta: { type: Date, required: true },        
    total_venta: { type: Number, required: true },      
    estado_venta: { type: String, required: true },     
    metodo_pago: { type: [MetodoPagoSchema], default: [] },
    productos: { type: [ProductoSchema], default: [] },    
    transaccion_id: { type: String }               
});

module.exports = mongoose.model('Venta', VentaSchema);