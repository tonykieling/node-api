const express = require("express");
const router  = express.Router();

const pingController = require("../controllers/ping.js");

router.get("/", pingController.simplePing);

module.exports = router;