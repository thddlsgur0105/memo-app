import express from "express";
import { addMemo, chat, completeMemo, deleteMemo, editMemo, miniMemo, search, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);

userRouter.get("/:id/memo", miniMemo);
userRouter.get("/:id/memo/add", addMemo);
userRouter.get("/:id/memo/delete", deleteMemo);
userRouter.get("/:id/memo/edit", editMemo);
userRouter.get("/:id/memo/complete", completeMemo);

userRouter.get("/:id/search", search);

userRouter.get("/:id/chat", chat)

export default userRouter;