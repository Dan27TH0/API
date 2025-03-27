const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    producto_id: { type: String, required: true }
});

const CatalogoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    productos: { type: [ProductoSchema], default: [] } 
});

module.exports = mongoose.model('Catalogo', CatalogoSchema);