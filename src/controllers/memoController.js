import ToDo, { addHashtags } from "../models/ToDo"; 

// 완료
export const getAddMemo =(req, res) => {
    return res.render("addMemo", { pageTitle: "addMemo" })
};

// 완료
export const postAddMemo = async (req, res) => {
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

// 완료
export const deleteMemo = async (req, res) => {
    const { user } = req.session;
    if (!user) {
        return res.status(403).redirect("/");
    }
    const { id } = req.params;
    const deleteToDo = await ToDo.findOne({ $and: [{ _id: id }, { author: user.username }] })
    if (!deleteToDo) {
        await req.session.destroy();
        return res.status(403).redirect("/");
    }
    await ToDo.findByIdAndDelete(id);
    return res.redirect(`/users/${user._id}/memo`);
};

// 완료
export const getEditMemo = async (req, res) => {
    const { user } = req.session;
    if (!user) {
        return res.status(403).redirect("/");
    }
    const { id } = req.params;
    const editToDo = await ToDo.findOne({ $and: [{ _id: id }, { author: user.username }]})
    if (!editToDo) {
        return res.status(404).render("404", { pageTitle: "Nothing Found.." })
    }
    return res.render("editMemo", { pageTitle: "editMemo", toDo: editToDo });
};

// 미완 
// $set 활용해서 우선순위도 설정해주는 알고리즘으로 작성 
export const postEditMemo = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags, completed } = req.body;
    const { user } = req.session;
    await ToDo.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: addHashtags(hashtags),
        $set: {
            meta: { completed }
        },
    });
    return res.redirect(`/users/${user._id}/memo`);
};

// 미완
export const completeMemo = (req, res) => res.send("Complete Memo Content");
