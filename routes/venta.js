const express = require('express');
const router = express.Router();
const ventaNexus = require('../models/Venta');

router.get('/api/venta', async (req, res) => {
    try {
        const ventas = await ventaNexus.find();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.post('/api/venta', async (req, res) => {
    const venta = new ventaNexus({
        usuario_id: req.body.usuario_id,
        fetcha_venta: req.body.fetcha_venta,
        total_venta: req.body.total_venta,
        estado_venta: req.body.estado_venta,
        metodo_pago: req.body.metodo_pago || [],
        productos: req.body.productos || []
    })

    try {
        const newVenta = await venta.save();
        res.status(201).json(newVenta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

exports.Router = router;