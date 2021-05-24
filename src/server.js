import express from "express";
import morgan from "morgan";
import session from "express-session";
import sessionStore from "sessionstore";
import middleware from "./middleware";
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
    resave: true,
    saveUninitialized: true,
    store: sessionStore.createSessionStore({
        type: "mongodb",
    }),
    cookie: {
        secure: true, 
    },
}));

app.use(middleware);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/memo", memoRouter);

export default app;