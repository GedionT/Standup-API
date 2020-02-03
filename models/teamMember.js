const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sizeValidator = [
    val => {
        let testVal = val.trim()
        return (testVal.length > 0 && testVal.length <=50)
    }, 
    '{PATH} must be between 1 and 50 characters long'
]

const teamMemberSchema = new Schema({
    name: { type: String, required: true, validate: sizeValidator }
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)