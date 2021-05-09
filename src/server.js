import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import memoRouter from "./routers/memoRouter";

const PORT = 5000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/memo", memoRouter);

const handleListening = () => console.log(`Listening on port http://localhost:${PORT}`)
app.listen(PORT, handleListening);