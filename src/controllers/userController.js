import ToDo from "../models/ToDo";

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
    // Login Template Rendering
    return res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
    const { username } = req.body;
    // Searching User data from database
    // Get user id
    return res.redirect(`/users/${fakeUser.id}/detail`)
};

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "Join" })
};

export const postJoin = (req, res) => {
    const { username } = req.body;
    // Create User data 
    // Get user id
    return res.redirect(`/users/${fakeUser.id}/detail`)
};

export const logout = (req, res) => {
    // Log user out
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
    const ToDos = await ToDo.find({});
    return res.render("miniMemo", { pageTitle: "miniMemo", fakeUser, toDos: ToDos });
};

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });