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

export const getAddMemo =(req, res) => res.render("addMemo", { pageTitle: "addMemo", fakeUser });
export const postAddMemo = (req, res) => {
    // Add new memo to currentUser's memo database
    // redirect to miniMemo Page with new added memo
};

export const deleteMemo = (req, res) => res.send("Delete Memo Content");
export const getEditMemo = (req, res) => {
    const { id } = req.params;
    const toDo = toDos[id-1];
    return res.render("editMemo", { pageTitle: "editMemo", fakeUser, toDo });
};
export const postEditMemo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    toDos[id-1].title = title;
    return res.redirect(`/users/${fakeUser.id}/memo`);
};
export const completeMemo = (req, res) => res.send("Complete Memo Content");
