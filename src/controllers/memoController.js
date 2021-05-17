import ToDo, { addHashtags } from "../models/ToDo"; 

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

    await ToDo.create({
        title,
        description,
        createdAt: Date.now(),
        author: fakeUser.id,
        hashtags: addHashtags(hashtags),
        meta: {
            completed: false,
            priority: 0,
        },
    });
    
    return res.redirect(`/users/${fakeUser.id}/memo`);
};

export const deleteMemo = async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);

    return res.redirect(`/users/${fakeUser.id}/memo`);
};

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
    await ToDo.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: addHashtags(hashtags),
    });
    return res.redirect(`/users/${fakeUser.id}/memo`);
};

export const completeMemo = (req, res) => res.send("Complete Memo Content");
