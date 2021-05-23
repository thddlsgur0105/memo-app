import ToDo from "../models/ToDo";
import User from "../models/User";

const fakeUser =
    {
        username: "Daniel",
        loggedIn: true,
        id: 1,  
    }

// Welcome Page
export const welcome = (req, res) => {
    return res.render("welcome", { pageTitle: "Welcome" });
};
export const getLogin = (req, res) => {
    // 로그인 pug 템플릿 렌더링
    return res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
    const { username } = req.body;
    // 인증과정 필요
    // Searching User data from database
    // Get user id
    return res.redirect(`/users/${fakeUser.id}/detail`)
};

export const getJoin = (req, res) => {
    // 회원가입 pug 템플릿 렌더링
    // User 모델 생성위한 input 정보를 받고 백엔드로 전송
    return res.render("join", { pageTitle: "Join" })
};

export const postJoin = async (req, res) => {
    // input 정보를 받아와서 새로운 User 모델 생성
    // password 는 추후에 bcrypt 이용해서 hash 화하는 과정 필요
    // location 역시 api 활용해서 가져오고 User 모델의 정보로 담는 과정 필요
    const { username, email, password } = req.body;
    await User.create({
        username,
        email,
        password,
    });
    // 세션에 유저 정보 저장
    // 세션에 유저에 대한 정보가 존재할 경우에 기본 welcome template이 아닌 개인적인 정보창으로 렌더링
    return res.redirect(`/users/${fakeUser.id}/detail`)
};

export const logout = (req, res) => {
    // 세션의 정보를 없애고 기본 welcome pug로 렌더링
    return res.redirect("/")
};

// User Detail Page
export const userDetail = (req, res) => {
    const { id } = req.params;
    // Get User data from database
    return res.render("userDetail", { pageTitle: "userDetail", fakeUser });
};

// Mini Memo Page
export const miniMemo = async (req, res) => {
    const { id } = req.params;
    // Get User data from database
    // Get CurrentUser's memo data from database
    const ToDos = await ToDo.find({}).sort({ createdAt: "desc" });
    return res.render("miniMemo", { pageTitle: "miniMemo", fakeUser, toDos: ToDos });
};

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });