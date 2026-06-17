const express = require("express");
const { getContact, postNewContact, singleUserGet, updateSingleData, deleteSingleData, PatchDataRequest } = require("../controllers/contactController");
const router = express.Router();

router.route('/').get(getContact).post(postNewContact)
router.route('/:id').get(singleUserGet).put(updateSingleData).delete(deleteSingleData).patch(PatchDataRequest)


module.exports = router;