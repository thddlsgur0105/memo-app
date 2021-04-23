import express from "express";
import morgan from "morgan";

const PORT = 5000;
const app = express();

// Configuraion on app -- middlewares
const logger = morgan("dev");
app.use(logger);
app.use(express.static('public'));

// Configuration on app -- routers 

const handleHome = (req, res) => res.render("index.pug")
app.get("/", handleHome);

// Connecting Server with Port

const handleListening = () => console.log(`Listening on port http://localhost:${PORT}`)
app.listen(PORT, handleListening);