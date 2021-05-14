import ToDo from "../models/ToDo";

const fakeUser =
    {
        username: "Daniel",
        loggedIn: true,
        id: 1,  
    }

// Welcome Page
export const welcome = (req, res) => {
    // Log out currentUser
    return res.render("welcome", { pageTitle: "Welcome", fakeUser });
};
export const login = (req, res) => res.send("Login");

// Not in Welcome page function
export const logout = (req, res) => res.send("Logout");

// User Detail Page
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail", fakeUser });

// Mini Memo Page
export const miniMemo = async (req, res) => {
    // Searching user data from currentUser's id
    const ToDos = await ToDo.find({});
    return res.render("miniMemo", { pageTitle: "miniMemo", fakeUser, toDos: ToDos });
};

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });