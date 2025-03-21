import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    completed: {
        type: Date
    },
    craft_id: {
        type: Number,
        default: 2
    },
    made_for: String,
    name: {
        type: String,
        required: true
    },
    notes: String,
    started: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Project', projectSchema)