import express from "express";
import { chat, memo, search, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);

userRouter.get("/:id/memo", memo);

userRouter.get("/search", search);

userRouter.get("/chat", chat)

export default userRouter;