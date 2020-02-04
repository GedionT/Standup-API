const mongoose    = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name        : { type: String, required: true },
    description : { type: String, required: true},
    isActive    : { type: Boolean, default: true, required: true }
}, {
    timestamps: { createdAt: 'created_At', updatedAt: 'modified_At' }
})

module.exports = mongoose.model('Project', projectSchema)