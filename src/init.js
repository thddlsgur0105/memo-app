import "./db";
import "./models/ToDo";
import app from "./server";

const PORT = 5000;

const handleListening = () => console.log(`Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);