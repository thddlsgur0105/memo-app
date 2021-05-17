import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/memo-app", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB :)");
const handleError = (error) => console.log("Error on DB", error);

db.once("open", handleOpen);
db.on("error", handleError);