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
            location,
            total: 0,
            friends: [],
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
    const userDetail = await User.findById(id);
    if (!userDetail) {
        await req.session.destroy();
        return res.redirect("/")
    }
    // 유저에 대한 세부적인 내용들 표시
    return res.render("userDetail", { pageTitle: "userDetail", userDetail });
};

// 미완
export const memo = async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;
    if (id !== String(user._id)) {
        return res.redirect("/")
    }
    try {
        // 기본 설정은 최신순으로 보여줌
        // 우선순위에 따라 보여주는 버튼 클릭시 그 메모부분만 선택적으로 재정렬해서 보여줌
        const toDos = await ToDo.find({ author: user.username }).sort({ createdAt: -1 });
        // toDos 라는 array에서 meta.completed 가 true 인 것과 false 인 것을 구분해서 새로운 array로 구현
        const completedToDos = toDos.filter(toDo => toDo.meta.completed === "true");
        const inCompletedToDos = toDos.filter(toDo => toDo.meta.completed === "false");
        return res.render("memo", { pageTitle: "memo", main: inCompletedToDos, aside: completedToDos });
    } catch(error) {
        return res.status(404).render("404", { pageTitle: "404", errorMessage: error.message })
    }
};

// 완료
export const search = async (req, res) => {
    // 주변 유저들을 입력받아 탐색하는 기능
    const { searchingBy } = req.query;
    let searchingUsers = [];
    if (searchingBy) {
        searchingUsers = await User.find({
            username: { $regex: `^${searchingBy}.*`, $options: "i" }
        })
    }
    // 주변 유저들과 관련된 정보 추가 제공
    const { user } = req.session;
    const relatedUsers = await User.find({ total: { $gt: user.total } });
    return res.render("search", { pageTitle: "search", relatedUsers, searchingUsers })
};

// 유저와 관련된 데이터베이스에서 전달받아 주소로서 전달하는 user id와 세션에 저장된 id를 비교해 검증하는 과정 고려
export const addFriend = async (req, res) => {
    // 추가할 유저의 id
    const { id } = req.params;

    // 로그인된 유저의 id
    const { user } = req.session;
    const currentUser = await User.findById(user._id);
    const myFriends = currentUser.friends;
    console.log(myFriends);
    console.log(myFriends.includes(id))

    if (!myFriends.includes(id)) {
        // 유저의 정보를 백엔드의 유저 데이터베이스에 업데이트 해주는 과정
        const updateUser = await User.findById(user._id);
        updateUser.friends.push(id);
        await updateUser.save(); 
    }
    return res.redirect(`/users/${user._id}/detail`)
}