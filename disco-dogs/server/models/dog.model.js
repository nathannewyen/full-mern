const mongoose = require('mongoose'),
    DanceMove = require("./dance.model");

const DiscoDog = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A dog must have a name"]
    },
    breed: {
        type: String,
        required: [true, "Breed must is required"],
        minlength: [3, "Breed must be at least 3 characters"]
    },
    age: {
        type: Number,
        required: [true, "A dog must have an age."],
        min: [1, "A dog mutt be at least 1 to get into the disco"]
    },
    moves: [DanceMove]
}, {
    timestamps: true
})

module.exports = DiscoDog;