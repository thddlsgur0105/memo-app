const fakeUser = {
    username: "Daniel",
    loggedIn: false,
    id: 1,
}

// Welcome Page
export const welcome = (req, res) => res.render("welcome", { pageTitle: "Welcome", fakeUser });
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");

// User Detail Page
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail", fakeUser });

// Mini Memo Page
export const miniMemo = (req, res) => res.render("miniMemo", { pageTitle: "miniMemo", fakeUser });
export const addMemo =(req, res) => res.send("Add Memo Content");
export const deleteMemo = (req, res) => res.send("Delete Memo Content");
export const editMemo = (req, res) => res.send("Edit Memo Content");
export const completeMemo = (req, res) => res.send("Complete Memo Content");

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });