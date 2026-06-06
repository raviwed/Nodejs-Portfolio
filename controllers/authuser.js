const { authUser } = require("../models/authUser");
const { User } = require("../models/user");


async function handleAuthUserSignUp(req, res) {
    const body = req.body
    const payload = await authUser.create({
        name: body.name,
        email: body.email,
        password: body.password,
    }).then((res) => res.status(200).json({ msg: "sucessfully added " }))
        .catch((err) => res.status(400).json({ msg: err }))
}

async function handleAuthLoginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await authUser.findOne({ email, password })

        if (!user) {
            return res.status(404).json({
                msg: "Invalid email or password"
            });
        }
        
        return res.status(200).json({
            msg: "Login successful",
            user
        });


    } catch (err) {
        return res.status(500).json({
            msg: err.message
        });
    }


}

module.exports = { handleAuthUserSignUp, handleAuthLoginUser }