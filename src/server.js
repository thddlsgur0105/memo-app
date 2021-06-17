import express from "express";
import morgan from "morgan";
import session from "express-session";
import sessionStore from "sessionstore";
import cookieParser from "cookie-parser";
import { localUser } from "./middleware";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import memoRouter from "./routers/memoRouter";

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

app.use(localUser);

app.use("/static", express.static("assets"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/memo", memoRouter);

export default app;