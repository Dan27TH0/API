const express = require('express');
const router = express.Router();
const cancelacion_ventaNexus = require('../models/CancelacionVenta');

router.get('/api/cancelacion_venta', async (req, res) => {
    try {
        const cancelacion_ventas = await cancelacion_ventaNexus.find();
        res.json(cancelacion_ventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/cancelacion_venta', async (req, res) => {
    const cancelacion_venta = new cancelacion_ventaNexus({
        venta_id: req.body.venta_id,
        fecha_cancelacion: req.body.fecha_cancelacion,
        motivo: req.body.motivo,
        estado_venta: req.body.estado_venta
    })

    try {
        const newCancelacionVenta = await cancelacion_venta.save();
        res.status(201).json(newCancelacionVenta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

exports.default = router;