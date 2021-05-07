import express from "express";
import { addMemo, completeMemo, deleteMemo, editMemo, miniMemo, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/detail", userDetail);
userRouter.get("/:id/memo", miniMemo);
userRouter.get("/:id/memo/add", addMemo);
userRouter.get("/:id/memo/delete", deleteMemo);
userRouter.get("/:id/memo/edit", editMemo);
userRouter.get("/:id/memo/complete", completeMemo);

export default userRouter;