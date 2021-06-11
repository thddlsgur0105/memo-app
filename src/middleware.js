import ToDo from "./models/ToDo";
import User from "./models/User";
import { LocalStorage } from "node-localstorage";

export const localUser = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.user = req.session.user;
    next();
};

export const totalCompleted = async (req, res, next) => {
    // 해당 세션에 등록된 유저와 관련된 toDo들을 뽑아와서 목록화
    // 목록화한 것들 중 completed의 개수를 반환해서 세션에 등록된 유저의 total 부분에 할당
    const { user } = req.session;
    const total = await ToDo.find({ author: user.username });
    const totalCompleted = total.filter(item => item.meta.completed === "true");
    await User.findByIdAndUpdate(user._id, {
        total: totalCompleted.length,
    })
    next();
}

export const something = (req, res, next) => {

    const localStorage = new LocalStorage('./scratch');

    // Get my toDos from localStorage 
    const toDos = localStorage.getItem("toDos");
    console.log("this is toDos", toDos);

    next();
}