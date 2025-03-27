const express = require('express');
const router = express.Router();
const historialCompraNexus = require('../models/HistorialCompra');

router.get('/api/historialCompra', async (req, res) => {
    try {
        const historialCompras = await historialCompraNexus.find();
        res.json(historialCompras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/historialCompra', async (req, res) => {
    const historialCompra = new historialCompraNexus({
        usuario_is: req.body.id_usuario,
        carrito_id: req.body.id_producto,
        fecha_compra: req.body.fecha_compra,
        estado_compra: req.body.estado_compra
    })
    
    try {
        const newHistorialCompra = await historialCompra.save()
        res.status(201).json(newHistorialCompra)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;