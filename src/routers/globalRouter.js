import express from "express";
import { login, logout, welcome } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", welcome);
globalRouter.get("/login", login);
globalRouter.get("/logout", logout);

export default globalRouter;