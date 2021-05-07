export const welcome = (req, res) => res.render("welcome");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const memo = (req, res) => res.render("memo");