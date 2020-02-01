const mongoose    = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name        : { type: String },
    description : { type: String},
    isActive    : { type: Boolean, default: true }
}, {
    timestamps: { createdAt: 'created_At', updatedAt: 'modified_At' }
})

module.exports = mongoose.model('Project', projectSchema)