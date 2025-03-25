const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    descripcion: { type: String, required: true }
})

module.exports = mongoose.model('Category', categorySchema)