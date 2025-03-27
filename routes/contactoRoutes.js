const express=require('express')
const router=express.Router()
const contactoNexus=require('../models/Contacto')

router.get('/api/contacto', async (req, res) => {
    try{
        const contactos=await contactoNexus.find();
        res.json(contactos);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/contacto', async (req, res) => {
    const contacto = new contactoNexus({
        nombre_usuario: req.body.nombre,
        email: req.body.email,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha
    })
    
    try{
        const newContacto = await contacto.save()
        res.status(201).json(newContacto)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
})

exports.default=router;