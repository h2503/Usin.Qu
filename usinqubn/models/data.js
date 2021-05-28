const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        default: 'Others',
        enum: ['Automobile','Bill & Utilities','Business','Clothing','Entertainment','Food','Gifts & Donations','Healthcare','Investment','Personal Care','Salary','Shopping','Side Hustle','Travel','Others'],
    },
    amount: {
        type: Number,
        trim: true,
        required:true
    },
    comment: {
        type: String
    }
})

module.exports = mongoose.model('Data', DataSchema)