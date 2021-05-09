import express from "express";
import { completeMemo, deleteMemo, getAddMemo, getEditMemo, postAddMemo, postEditMemo } from "../controllers/memoController";

const memoRouter = express.Router();

memoRouter.get("/add", getAddMemo);
memoRouter.post("/add", postAddMemo);

memoRouter.get("/:id/delete", deleteMemo);
memoRouter.get("/:id/edit", getEditMemo);
memoRouter.post("/:id/edit", postEditMemo);
memoRouter.get("/:id/complete", completeMemo);

export default memoRouter;