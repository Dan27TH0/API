require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const swagerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');

// Rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const catalogoRoutes = require('./routes/catalogoRoutes');
const misionRoutes = require('./routes/misionRoutes');
const visionRoutes = require('./routes/visionRoutes');
const politicasRoutes = require('./routes/politicasRoutes');
const preguntasFrecuentesRoutes = require('./routes/preguntasFrecuentesRoutes');
const cancelacion_venta = require('./routes/cancelacion_venta');
const cancelacionEnvio = require('./routes/cancelacionEnvio');
const carritoRoutes = require('./routes/carritoRoutes')
const configuracionRoutes = require('./routes/configuracionRoutes')
const contactoRoutes = require('./routes/contactoRoutes')
const dispositivoRoutes = require('./routes/dispositivoRoutes')
const envioRoutes = require('./routes/envioRoutes')
const eventoRoutes = require('./routes/eventoRoutes')
const historialCompra = require('./routes/historialCompra')
const metodo_pagoRoutes = require('./routes/metodo_pagoRoutes')
const venta = require('./routes/venta')

const app=express();
const PORT=process.env.PORT||3000;

//agregamos el midleware para trabajar con json
app.use(express.json());

//definimos nuestro primer endpoint o ruta
app.get('/',(req,res)=>{
    res.send('esto es mi primer API');
})

//generamos las distintas rutas...
app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', categoryRoutes);
app.use('/', catalogoRoutes);
app.use('/', misionRoutes);
app.use('/', visionRoutes);
app.use('/', politicasRoutes);
app.use('/', preguntasFrecuentesRoutes);
app.use('/', cancelacion_venta)
app.use('/', cancelacionEnvio)
app.use('/', carritoRoutes)
app.use('/', configuracionRoutes)
app.use('/', contactoRoutes)
app.use('/', dispositivoRoutes)
app.use('/', envioRoutes)
app.use('/', eventoRoutes)
app.use('/', historialCompra)
app.use('/', metodo_pagoRoutes)
app.use('/', venta)

app.listen(process.env.PORT,()=>{
    console.log('La aplicacion escucho el puerto : '+process.env.PORT);
})

//configuro mi coneccion a mongo
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB Atlas ok'))
    .catch((error) => console.error('Error conectando a MongoDB:', error));