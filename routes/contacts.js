const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user's contacts
// @acess   Private
router.get("/", (req, res) => {
  res.send("Get all user's contacts");
});

// @route   POST api/contacts
// @desc    Add new contact
// @acess   Private
router.post("/", (req, res) => {
  res.send("Add a new contact");
});

// @route   PUT api/contacts/:id
// @desc    Update cotact info
// @acess   Private
router.put("/:id", (req, res) => {
  res.send("Add a new contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @acess   Private
router.delete("/:id", (req, res) => {
  res.send("Add a new contact");
});

module.exports = router;
