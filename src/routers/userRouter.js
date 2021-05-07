import express from "express";
import { memo } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/memo", memo);

export default userRouter;