const express = require("express");

const router = express.Router();

const NewController = require("../app/controller/NewController");

router.get("/", NewController.index);

module.exports = router;
