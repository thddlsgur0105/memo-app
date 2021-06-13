import ToDo from "./models/ToDo";
import User from "./models/User";

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

async function saveMongo(data) {
    
}

export const something = (req, res, next) => {
    // JSON형태로 서버에 jsonArray를 받고 mongoDB에 저장    
    const stringifiedArray = req.cookies.something;
    const parsedArray = JSON.parse(stringifiedArray);
    parsedArray.forEach(data => {
        // saving to MongoDB
        saveMongo(data);
    });
    console.log(parsedArray);
    console.log(req.session);
    next();
}