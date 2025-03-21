import mongoose from "mongoose";

const PatternSchema = new mongoose.Schema({
    foot_circ: {
        type: Number,
        required: true
    },
    foot_length: {
        type: Number,
        required: true
    },
    thigh_circ: {
        type: Number,
        required: true
    },
    sock_length: {
        type: Number,
        required: true
    },
    stitch_gauge: {
        type: Number,
        required: true
    },
    row_gauge: {
        type: Number,
        required: true
    },
    pattern_repeat: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})