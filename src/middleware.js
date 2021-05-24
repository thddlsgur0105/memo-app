const localUser = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn),
    res.locals.user = req.session.user
    console.log(req.session);
    next();
};

export default localUser;