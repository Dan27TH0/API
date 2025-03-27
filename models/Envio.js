const mongoose = require('mongoose');

const DireccionSchema = new mongoose.Schema({
    calle: { type: String, required: true },          
    colonia: { type: String, required: true },        
    ciudad: { type: String, required: true },         
    estado: { type: String, required: true },         
    codigo_postal: { type: String, required: true }   
});


const EnvioSchema = new mongoose.Schema({
    venta_id: { type: String, required: true },
    fecha_envio: { type: Date, required: true },
    direccion: { type: DireccionSchema, required: true },
    estado_envio: { type: String, required: true }       
});

module.exports = mongoose.model('Envio', EnvioSchema);