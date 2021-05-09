const fakeUser =
    {
        username: "Daniel",
        loggedIn: true,
        id: 1,  
    }

let toDos = [
    {
        title: "Working",
        author: "Daniel",
        createdAt: "2 days ago",
        id: 1,
        completed: false,
    },
    {
        title: "Homework",
        author: "Daniel",
        createdAt: "1 days ago",
        id: 2,
        completed: false,
    },
    {
        title: "Drinking",
        author: "Daniel",
        createdAt: "5 days ago",
        id: 3,
        completed: true,
    }
]

// Welcome Page
export const welcome = (req, res) => {
    // Log out currentUser
    return res.render("welcome", { pageTitle: "Welcome", fakeUser });
};
export const login = (req, res) => res.send("Login");

// Not in Welcome page function
export const logout = (req, res) => res.send("Logout");

// User Detail Page
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail", fakeUser, toDos });

// Mini Memo Page
export const miniMemo = (req, res) => {
    // Searching user data from currentUser's id
    // Getting currentUser's memo database
    return res.render("miniMemo", { pageTitle: "miniMemo", fakeUser, toDos });
};

// User Search Page
export const search = (req, res) => res.render("search", { pageTitle: "search", fakeUser });

// Realtime Chat Page
export const chat = (req, res) => res.render("chat", { pageTitle: "chat", fakeUser });