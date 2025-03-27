const express = require('express');
const router = express.Router();
const preguntasFrecuentesNexus = require('../models/PreguntasFrecuentes');
const Category = require('../models/Category');

router.get('/api/preguntasFrecuentes', async (req, res) => { 
    try {
        const preguntasFrecuentes = await preguntasFrecuentesNexus.find();
        res.json(preguntasFrecuentes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/preguntasFrecuentes', async (req, res) => {
    const preguntasFrecuentes = new preguntasFrecuentesNexus({
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta,
        categoria_id: req.body.categoria_id 
    })

    try {
        const newPreguntasFrecuentes = await preguntasFrecuentes.save();
        res.status(201).json(newPreguntasFrecuentes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/api/preguntasFrecuentes/categorias', async (req, res) => {
    try {
        const categorias = await Category.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;