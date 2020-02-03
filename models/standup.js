const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const requiredStringValidator = [
    val => {
        let testVal = val.trim()
        return (testVal.length > 0)
    },
    // custom error message
    'Please supply a value for {PATH}0'
]

const standupSchema = new Schema({
    teamMemberId  : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teamMembers'
    },
    teamMember    : { type: String, required: true, validate: requiredStringValidator },
    project       : { type: String, required: true, validate: requiredStringValidator },
    workYesterday : { type: String, required: true, validate: requiredStringValidator },
    workToday     : { type: String, required: true, validate: requiredStringValidator },
    impediments   : { type: String, required: true, default: 'None' },
    createdOn     : { type: Date, default: Date.now, required: true }
}, {
    timestamps : { createdAt: 'created_At', updatedAt: 'modified_At'}
})

 module.exports = mongoose.model('Standup', standupSchema)