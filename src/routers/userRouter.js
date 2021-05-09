import express from "express";
import { chat, miniMemo, search, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);

userRouter.get("/:id/memo", miniMemo);

userRouter.get("/search", search);

userRouter.get("/chat", chat)

export default userRouter;