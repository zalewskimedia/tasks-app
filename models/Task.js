const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "To pole nie może być puste"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Task", TaskSchema)
