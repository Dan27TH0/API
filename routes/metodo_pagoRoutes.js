const express=require('express');
const router=express.Router();
const metodo_pagoNexus=require('../models/Metodo_Pago');


router.get('/api/metodo_pago', async (req, res) => {
    try{
        const metodo_pagos=await metodo_pagoNexus.find();
        res.json(metodo_pagos);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/metodo_pago', async (req, res) => {
    const metodo_pago = new metodo_pagoNexus({
        descripcion: req.body.descripcion
    })
    
    try{
        const newMetodoPago = await metodo_pago.save()
        res.status(201).json(newMetodoPago)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;