const express = require('express');
const router = express.Router();
const politicasNexus = require('../models/Politicas');

router.get('/api/politicas', async (req, res) => {
    try {
        const politicas = await politicasNexus.find();
        res.json(politicas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/politicas', async (req, res) => {
    const politicas = new politicasNexus({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        fecha: req.body.fecha
    })

    try {
        const newPoliticas = await politicas.save();
        res.status(201).json(newPoliticas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;