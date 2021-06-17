import express from "express";
import { addFriend, memo, search, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);

userRouter.get("/:id/memo", memo);

userRouter.get("/search", search);

userRouter.get("/:id/add", addFriend);

export default userRouter;