const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ClassSchema = new Schema({
  class_name:{
    type: String,
    required: true
  }
})

module.exports = Class = mongoose.model('Class', ClassSchema)