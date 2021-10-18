const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    "title": String,
    "body": String,
    "create_at": { type: Date, default: Date.now},
    "update_at": { type: Date, default: Date.now},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Note', noteSchema)