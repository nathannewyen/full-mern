const mongoose = require('mongoose')

const DanceMove = new mongoose.Schema({
    move: {
        type: String,
        required: true,
        minlength: [4, "Not descriptive enough"]
    },
    skillLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    }
}, {
    timestamps: true
})

module.exports = DanceMove;