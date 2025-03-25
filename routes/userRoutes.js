const express=require('express');
const router=express.Router();
const usersNexus=require('../models/User');


router.get('/api/users', async (req,res)=>{
    try{
        const users=await usersNexus.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/users', async (req, res) => {
    const user = new usersNexus({
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno || '', // Opcional
        usuario: req.body.usuario, // Coincide con el modelo
        password: req.body.password,
        correo: req.body.correo,
        telefono: req.body.telefono || '', // Opcional
        direccion: req.body.direccion || {}, // Opcional
        rol: req.body.rol || 'user' // Default 'user'
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
});

module.exports = router;