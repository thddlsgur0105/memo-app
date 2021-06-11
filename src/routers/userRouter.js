import express from "express";
import { addFriend, memo, search, userDetail } from "../controllers/userController";
import { something, totalCompleted } from "../middleware";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);

userRouter.get("/:id/memo", totalCompleted, memo);

userRouter.get("/search", search);

userRouter.get("/:id/add", addFriend);

userRouter.get("/:id/server", something)

export default userRouter;