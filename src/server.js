import express from "express";
import morgan from "morgan";
import session from "express-session";
import sessionStore from "sessionstore";
import { memo } from "./controllers/userController";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: "Hello",
    resave: false,
    saveUninitialized: true,
    store: sessionStore.createSessionStore({
        type: "mongodb",
    }),
}));

app.use("/static", express.static("assets"));

app.get("/", memo)

export default app;