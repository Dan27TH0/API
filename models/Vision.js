const mongoose = require('mongoose');

const VisionSchema = new mongoose.Schema({
    contenido: { type: String, required: true },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Vision', VisionSchema);