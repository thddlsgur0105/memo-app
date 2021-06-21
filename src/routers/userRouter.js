import express from "express";
import { addFriend, memo, user, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/memo", memo);

userRouter.get("/:id/user", user);

userRouter.get("/:id/add", addFriend);

export default userRouter;