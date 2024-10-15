const Link = require('./link')
const mongoose = require('mongoose')

const folderSchema = mongoose.Schema({
    _id:{type: Number,unique:true},
    owner: Number,
    title:String,
    links: Number
})


module.exports = mongoose.model('Folder',folderSchema)