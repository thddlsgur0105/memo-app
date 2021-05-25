import bcrypt from "bcrypt";
import ToDo from "../models/ToDo";
import User from "../models/User";

// Welcome Page
export const welcome = (req, res) => {
    return res.render("welcome", { pageTitle: "Welcome" });
};
export const getLogin = (req, res) => {
    return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    // 인증 알고리즘 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.render("login", { pageTitle: "Login", errorMessage: "해당 이메일이 존재하지 않습니다.." })
    }
    const comfirmPassword = bcrypt.compareSync(password, existingUser.password);
    if (!comfirmPassword) {
        return res.render("login", { pageTitle: "Login", errorMessage: "패스워드가 일치하지 않습니다.." })
    }
    // 인증이 완료된 경우
    req.session.user = existingUser;
    req.session.loggedIn = true;
    return res.redirect(`/users/${existingUser.id}/detail`)
};

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "Join" })
};

export const postJoin = async (req, res) => {
    const { username, email, password, location } = req.body;
    const existsDocument = await User.exists({$or: [{ username }, { email }]});
    if (existsDocument) {
        return res.render("join", { pageTitle: "Join" ,errorMessage: "유저이름 혹은 이메일이 중복되었습니다. 다시 확인해주세요.." })
    }
    await User.create({
        username,
        email,
        password,
        location
    });
    return res.redirect("/login");
};

export const logout = (req, res) => {
    // 세션의 정보를 없애고 기본 welcome pug로 렌더링
    return res.redirect("/")
};

// User Detail Page
export const userDetail = async (req, res) => {
    const { id } = req.params;
    // 유저 정보 찾기
    const user = await User.findById(id);
    // 유저에 대한 세부적인 내용들 표시
    return res.render("userDetail", { pageTitle: "userDetail", user });
};

// Memo Page
export const memo = async (req, res) => {
    const { id } = req.params;
    // 유저 정보 찾기
    const user = await User.findById(id);
    // 메모 데이터베이스에서 찾은 유저와 관련된 정보만을 뽑아서 배열로 반환
    const toDos = await ToDo.find({}).sort({ createdAt: "desc" });
    return res.render("memo", { pageTitle: "memo", toDos });
};

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });