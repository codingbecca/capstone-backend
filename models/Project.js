import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    saveToRavelry: Boolean,
    projectDetails: {
        craft_id: {
            type: Number,
            default: 2
        },
        made_for: String,
        name: {
            type: String,
            required: true,
            unique: true
        },
        notes: String
    }
});

export default mongoose.model('Project', projectSchema)