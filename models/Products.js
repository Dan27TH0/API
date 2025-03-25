const mongoose = require('mongoose');

const specificationsSchema = new mongoose.Schema({
    tamaño: String,
    color: String,
    material: String
});

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    codigo: { type: String, required: true, unique: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    imagen: String,
    stock: { type: Number, default: 0 },
    especificaciones: specificationsSchema,
    fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);