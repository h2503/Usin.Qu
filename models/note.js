const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Note: {
        type: String,
    },

}, {timestamps:true})

module.exports = mongoose.model('Note', NoteSchema)