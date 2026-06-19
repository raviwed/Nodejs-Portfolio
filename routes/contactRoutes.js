const express = require("express");
const { getContact, postNewContact, singleUserGet, updateSingleData, deleteSingleData,currentUser, PatchDataRequest, loginUser } = require("../controllers/contactController");
const { ValidateToken } = require("../middleware/validationHandler");
const router = express.Router();

router.use(ValidateToken)

router.route('/').get(getContact).post(postNewContact)

router.route("/login").post(loginUser)

router.route("/current").get(ValidateToken, currentUser) 

router.route('/:id').get(singleUserGet).put(updateSingleData).delete(deleteSingleData).patch(PatchDataRequest)



module.exports = router;