const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum : ["task", "complite", "progress", "canceled"],
        default: "task",
        lowercase: true,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{versionKey: false, timestamps:{createdAt: true, updatedAt: false} })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;
