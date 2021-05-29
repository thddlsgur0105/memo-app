import express from "express";
import { deleteMemo, getAddMemo, getEditMemo, postAddMemo, postEditMemo } from "../controllers/memoController";

const memoRouter = express.Router();

memoRouter.route("/add").get(getAddMemo).post(postAddMemo);

memoRouter.get("/:id/delete", deleteMemo);

memoRouter.route("/:id/edit").get(getEditMemo).post(postEditMemo);

export default memoRouter;