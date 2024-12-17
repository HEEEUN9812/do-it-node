const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async(req,res) => {
    res.send("Contacts Page");
});

const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, age} = req.body;
    if(!name || !age) {
        return res.send("필수값이 입력되지 않았습니다");
    }
    res.send("create contacts");
})

const getContact = asyncHandler(async (req,res) => {
    res.send(`view contact for ID : ${req.params.id}`)
})

const updateContact = asyncHandler(async (req,res) =>{
    res.send(`update contact for ID : ${req.params.id}`);
})

const deleteContact = asyncHandler(async (req,res) =>{
    res.send(`delete contact for ID : ${req.params.id}`);
})

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact};
