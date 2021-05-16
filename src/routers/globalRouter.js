import express from "express";
import { getJoin, getLogin, logout, postJoin, postLogin, welcome } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", welcome);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/logout", logout);
globalRouter.route("/join").get(getJoin).post(postJoin)

export default globalRouter;