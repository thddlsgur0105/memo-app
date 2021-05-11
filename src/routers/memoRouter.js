import express from "express";
import { completeMemo, deleteMemo, getAddMemo, getEditMemo, postAddMemo, postEditMemo } from "../controllers/memoController";

const memoRouter = express.Router();

memoRouter.route("/add").get(getAddMemo).post(postAddMemo);

memoRouter.get("/:id/delete", deleteMemo);

memoRouter.route("/:id/edit").get(getEditMemo).post(postEditMemo);

memoRouter.get("/:id/complete", completeMemo);

export default memoRouter;