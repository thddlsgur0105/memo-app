import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: String,
    total: Number,
})

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 5);
})

const User = mongoose.model("User", userSchema);


export default User;