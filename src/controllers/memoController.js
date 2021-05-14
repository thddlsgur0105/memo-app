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

export const getEditMemo = async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (!toDo) {
        return res.render("404", { pageTitle: "Nothing Found..", fakeUser })
    }
    return res.render("editMemo", { pageTitle: "editMemo", fakeUser, toDo });
};
export const postEditMemo = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    await ToDo.findByIdAndUpdate(id, { title, description, hashtags });
    return res.redirect(`/users/${fakeUser.id}/memo`);
};

export const completeMemo = (req, res) => res.send("Complete Memo Content");
