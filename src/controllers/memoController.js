import ToDo from "../models/ToDo"; 

const fakeUser =
    {
        username: "Daniel",
        loggedIn: true,
        id: 1,  
    }

export const getAddMemo =(req, res) => res.render("addMemo", { pageTitle: "addMemo", fakeUser });
export const postAddMemo = async (req, res) => {
    // Add new memo to currentUser's memo database
    const { title, description, hashtags } = req.body;
    const toDo = new ToDo({
        title,
        description,
        author: fakeUser.username,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta: {
            completed: false,
            priority: 1,
        },
    });
    await toDo.save();
    return res.redirect(`/users/${fakeUser.id}/memo`);
};

export const deleteMemo = (req, res) => res.send("Delete Memo Content");

export const getEditMemo = (req, res) => {
    const { id } = req.params;
    return res.render("editMemo", { pageTitle: "editMemo", fakeUser });
};
export const postEditMemo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/users/${fakeUser.id}/memo`);
};

export const completeMemo = (req, res) => res.send("Complete Memo Content");
