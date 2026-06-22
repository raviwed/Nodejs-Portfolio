const express = require("express");
const { getContact, postNewContact, singleUserGet, updateSingleData, deleteSingleData,currentUser, PatchDataRequest, loginUser } = require("../controllers/contactController");
const { ValidateToken } = require("../middleware/validationHandler");
const router = express.Router();

router.route('/').get(getContact).post(postNewContact)

router.route("/login").post(loginUser)

router.route("/current").get(ValidateToken, currentUser)

router.route('/:id').get(ValidateToken, singleUserGet).put(ValidateToken, updateSingleData).delete(ValidateToken, deleteSingleData).patch(ValidateToken, PatchDataRequest)



module.exports = router;
