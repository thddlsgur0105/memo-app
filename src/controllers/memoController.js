import ToDo, { addHashtags } from "../models/ToDo"; 

export const getAddMemo =(req, res) => {
    return res.render("addMemo", { pageTitle: "addMemo" })
};
export const postAddMemo = async (req, res) => {
    // Add new memo to currentUser's memo database
    const { title, description, hashtags } = req.body;
    const { user } = req.session;

    await ToDo.create({
        title,
        description,
        createdAt: Date.now(),
        author: user.username,
        hashtags: addHashtags(hashtags),
        meta: {
            completed: false,
            priority: 0,
        },
    });
    
    return res.redirect(`/users/${user._id}/memo`);
};

export const deleteMemo = async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;
    await ToDo.findByIdAndDelete(id);

    return res.redirect(`/users/${user._id}/memo`);
};

export const getEditMemo = async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (!toDo) {
        return res.render("404", { pageTitle: "Nothing Found.." })
    }
    return res.render("editMemo", { pageTitle: "editMemo", toDo });
};

export const postEditMemo = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const { user } = req.session;
    await ToDo.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: addHashtags(hashtags),
    });
    return res.redirect(`/users/${user._id}/memo`);
};

export const completeMemo = (req, res) => res.send("Complete Memo Content");
