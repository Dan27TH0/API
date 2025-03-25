const express=require('express');
const router=express.Router();
const productsNexus=require('../models/Products');


router.get('/api/products', async (req,res)=>{
    try{
        const users=await productsNexus.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/products', async (req, res) => {
    const product = new productsNexus({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        codigo: req.body.codigo,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        categoria_id: req.body.categoria_id,
        imagen: req.body.imagen,
        stock: req.body.stock || 0,
        especificaciones: req.body.especificaciones || {}
    })

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;