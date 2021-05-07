import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const PORT = 5000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.static('public'));

app.use("/", globalRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`Listening on port http://localhost:${PORT}`)
app.listen(PORT, handleListening);