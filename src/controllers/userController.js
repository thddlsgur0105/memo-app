import bcrypt from "bcrypt";
import ToDo from "../models/ToDo";
import User from "../models/User";

// 완료
export const welcome = (req, res) => {
    return res.render("welcome", { pageTitle: "Welcome" });
};

// 완료
export const getLogin = (req, res) => {
    return res.render("login", { pageTitle: "Login" });
};

// 완료
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


// 완료
export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "Join" })
};

// 완료
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
            location
        });
        return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join", { pageTitle: "Join", errorMessage: error.message })
    }
};

// 완료
export const logout = async (req, res) => {
    await req.session.destroy();
    return res.redirect("/")
};

// 미완
export const userDetail = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        await req.session.destroy();
        return res.redirect("/")
    }
    // 유저에 대한 세부적인 내용들 표시
    return res.render("userDetail", { pageTitle: "userDetail", user });
};

// 완료
export const memo = async (req, res) => {
    const { id } = req.params;
    const { user: { _id } } = req.session;
    if (id !== String(_id)) {
        return res.redirect("/")
    }
    try {
        const currentUser = await User.findById(id);
        const toDos = await ToDo.find({ author: currentUser.username }).sort({ createdAt: "desc" });
        return res.render("memo", { pageTitle: "memo", toDos });
    } catch(error) {
        return res.status(404).render("404", { pageTitle: "404", errorMessage: error.message })
    }
};

// 미완
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// 미완
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });