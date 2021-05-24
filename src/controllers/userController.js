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

export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    // 인증 알고리즘 
    const existingEmail = await User.findOne({ email });
    if (!existingEmail) {
        return res.render("login", { pageTitle: "Login", errorMessage: "해당 이메일이 존재하지 않습니다.." })
    }
    // 페스워드 비교 알고리즘 -- bcrypt 암호화 먼저 하고 계속 진행하자
    return res.redirect(`/users/${fakeUser.id}/detail`)
};

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "Join" })
};

export const postJoin = async (req, res) => {
    // password 는 추후에 bcrypt 이용해서 hash 화하는 과정 필요
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