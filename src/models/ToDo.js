import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: Number,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        completed: Boolean,
        priority: Number,
    },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

export const addHashtags = hashtags => hashtags.split(",").map(word => word.startsWith("#") ? word : `#${word}`);

export default ToDo;