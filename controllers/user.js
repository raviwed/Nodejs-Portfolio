const { User } = require("../models/user")
async function handleGetAllUsers(req, res) {
    const allDbUser = await User.find({})
    return res.json(allDbUser);
}

async function handleGetUserById(req, res) {
    const data = Number(req.params.userId)
    const value = User.findById(data)
    if (!value) return res.status(404).json({ error: "user not found" })
    return res.json(value)
}


async function handlePostUserById(req, res) {
    const body = req.body;
    // Users.push({ ...body })
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: 'success' });
    // })

    const result = await User.create({
        id: body.id,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address: body.ip_address,
    })
    // console.log("result", result)
    return res.status(200).json({ msg: "success" });
}

async function handlePatchById(req, res) {
    const query = req.params.id
    const updatedFeilds = req.body;
    const userIndex = await User.findByIdAndUpdate(query, updatedFeilds)
    return res.json({ status: "pending" });
}


async function handlePutRequest(req, res) {
    const query = req.params.id
    const updatedFeilds = req.body;
    const userIndex = await User.findOneAndUpdate(query, updatedFeilds)
    return res.json({ status: "pending" });
}

async function handleDelete(req, res){
    
    const query = req.params.id

    const update = await User.findByIdAndDelete(query)

    return res.json({ status: "pending" });
}
module.exports = { handleGetAllUsers, handleGetUserById, handlePostUserById, handlePatchById, handlePutRequest, handleDelete }