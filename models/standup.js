const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const standupSchema = new Schema({
    teamMember    : { type: String },
    project       : { type: String },
    workYesterday : { type: String },
    workToday     : { type: String },
    impediments   : { type: String},
    createdOn     : { type: Date, default: Date.now }
}, {
    timestamps : { createdAt: 'created_At', updatedAt: 'modified_At'}
})

 module.exports = mongoose.model('Standup', standupSchema)