import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: String,
    friends: {
        type: [String],
    },
})

// 로그인 오류 발생 원인인듯..?
// friends 수정할 때 마다 password를 5번 다시 bcrypt 해서 달라지게 됨
userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 5);
})

const User = mongoose.model("User", userSchema);


export default User;