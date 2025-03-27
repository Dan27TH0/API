const express = require('express');
const router = express.Router();
const carritoNexus = require('../models/Carrito');

router.get('/api/carrito', async (req, res) => {
    try {
        const carritos = await carritoNexus.find();
        res.json(carritos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/carrito', async (req, res) => {
    const carrito = new carritoNexus({
        usuaruio_id: req.body.idProducto,
        productos: req.body.productos || [],
        fecha: req.body.fecha
    })

    try {
        const newCarrito = await carrito.save();
        res.status(201).json(newCarrito);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;