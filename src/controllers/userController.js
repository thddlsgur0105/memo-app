import bcrypt from "bcrypt";
import User from "../models/User";

// 첫 페이지
export const welcome = (req, res) => {
    return res.render("welcome", { pageTitle: "환영합니다" });
};

// 로그인
export const getLogin = (req, res) => {
    return res.render("login", { pageTitle: "로그인" });
};

// 로그인
export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(400).render("login", { pageTitle: "Login", errorMessage: "해당 이메일이 존재하지 않습니다.." })
    }
    const comfirmPassword = bcrypt.compareSync(password, existingUser.password);
    if (!comfirmPassword) {
        return res.status(400).render("login", { pageTitle: "Login", errorMessage: "패스워드가 일치하지 않습니다.." })
    }
    
    // 세션에 들어가 있는 유저에 대한 정보는 데이터베이스에서 가져온 불변 데이터.
    req.session.user = existingUser;
    req.session.loggedIn = true;

    return res.redirect(`/users/${existingUser.id}/detail`)
};


// 회원가입
export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "회원가입" })
};

// 회원가입
export const postJoin = async (req, res) => {
    const { username, email, password, password2, location } = req.body;
    const existsDocument = await User.exists({$or: [{ username }, { email }]});
    if (existsDocument) {
        return res.status(400).render("join", { pageTitle: "Join" ,errorMessage: "유저이름 혹은 이메일이 중복되었습니다. 다시 확인해주세요.." })
    }
    if (password !== password2) {
        return res.status(400).render("join", { pageTitle: "Join", errorMessage: "패스워드가 일치하지 않습니다.." })
    }
    try {
        await User.create({
            username,
            email,
            password,
            location,
            friends: [],
        });
        return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join", { pageTitle: "Join", errorMessage: error.message })
    }
};

// 로그아웃
export const logout = async (req, res) => {
    await req.session.destroy();
    return res.redirect("/")
};

// 유저 세부정보
export const userDetail = async (req, res) => {
    const { id } = req.params;
    const userDetail = await User.findById(id);
    if (!userDetail) {
        await req.session.destroy();
        return res.redirect("/")
    }
    
    return res.render("userDetail", { pageTitle: "내 정보", userDetail });
};

// 메모 데이터베이스와 연동 X
export const memo = async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;
    if (id !== String(user._id)) {
        return res.redirect("/")
    }

    return res.render("memo", { pageTitle: "메모장" });    
};

// 친구 검색
export const search = async (req, res) => {
    // 주변 유저들을 입력받아 탐색하는 기능
    const { searchingBy } = req.query;
    let searchingUsers = [];
    if (searchingBy) {
        searchingUsers = await User.find({
            username: { $regex: `^${searchingBy}.*`, $options: "i" }
        })
    }
    return res.render("search", { pageTitle: "친구", searchingUsers })
};

// 친구 추가
export const addFriend = async (req, res) => {
    // 추가할 유저의 id
    const { id } = req.params;
    const friend = await User.findById(id);

    // 로그인된 유저의 id
    const { user } = req.session;
    const currentUser = await User.findById(user._id);
    const myFriends = currentUser.friends;

    if (!myFriends.includes(friend.username)) {
        // 유저의 정보를 백엔드의 유저 데이터베이스에 업데이트 해주는 과정
        myFriends.push(friend.username);
        await currentUser.save(); 
    }
    return res.redirect(`/users/${id}/detail`)
}