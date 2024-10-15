const mongoose = require('mongoose')
const linkSchema = mongoose.Schema({
    _id:{type: Number,unique:true},
    folder_id: Number,
    title: String,
    actualLink: String
})

module.exports = mongoose.model('Link',linkSchema)