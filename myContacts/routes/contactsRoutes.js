const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContctForm
} = require("../controllers/contactController");

router.route("/")
.get(getAllContacts)

router.route("/add")
.get(addContctForm)
.post(createContact);;

router.route("/:id")
.get(getContact)
.put(updateContact)
.delete(deleteContact);

module.exports = router;