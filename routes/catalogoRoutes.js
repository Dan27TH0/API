const express = require('express');
const router = express.Router();
const catalogoNexus = require('../models/Catalogo');


router.get('/api/catalogo', async (req, res) => {
    try {
        const catalogos = await catalogoNexus.find();
        res.json(catalogos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/catalogo', async (req, res) => {
    const catalogo = new catalogoNexus({
        nombre: req.body.nomrbe,
        descripcion: req.body.descripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin, 
        productos: req.body.productos || []
    })

    try {
        const newCatalogo = await catalogo.save()
        res.status(201).json(newCatalogo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;