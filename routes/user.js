const express = require("express")
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handlePostUserById, handlePatchById, handlePutRequest, handleDelete } = require("../controllers/user")

router.get("/", handleGetAllUsers)

// router.get("/about", (req, res) => {
//     return res.send("Hello From about Page" + " hey " + req.query.name + " you are age " + req.query.age)
// })

// router.get("/setup", (req, res) => {
//     return res.json(users)
// })

router.get("/:userId", handleGetUserById)

router.post("/", handlePostUserById)

router.patch("/:id", handlePatchById)

router.put("/:id", handlePutRequest)
router.delete("/:id", handleDelete)

module.exports = router