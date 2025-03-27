const express = require('express');
const router = express.Router();
const cancelacionEnvioNexus = require('../models/CancelacionEnvio');

// Obtener todas las cancelaciones de envío
router.get('/api/cancelacion_envio', async (req, res) => {
    try {
        const cancelacionEnvios = await cancelacionEnvioNexus.find();
        res.json(cancelacionEnvios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva cancelación de envío
router.post('/api/cancelacion_envio', async (req, res) => {
    const cancelacionEnvio = new cancelacionEnvioNexus({
        envio_id: req.body.envio_id,
        fecha_cancelacion: req.body.fecha_cancelacion,
        motivo: req.body.motivo,
        estado: req.body.estado
    });

    try {
        const newCancelacionEnvio = await cancelacionEnvio.save();
        res.status(201).json(newCancelacionEnvio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;