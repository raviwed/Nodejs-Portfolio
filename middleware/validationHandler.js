const jwt = require("jsonwebtoken")

const ValidateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401);
        throw new Error("User is not authorized");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, "Raviteja@9908", (err, decoded) => {
        if (err) {
            res.status(401);
            throw new Error("User is not authorized");
        }

        req.user = decoded.user;
        next();
    });
}

module.exports = { ValidateToken }
