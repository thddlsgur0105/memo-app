import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    createdAt: Date,
    hashtags: [{ type: String }],
});

const ToDo = mongoose.model("ToDo", toDoSchema);

export const addHashtags = hashtags => hashtags.split(",").map(word => word.startsWith("#") ? word : `#${word}`);

export default ToDo;