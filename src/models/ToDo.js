import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    title: String,
    author: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        completed: Boolean,
        priority: Number,
    },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

export default ToDo;