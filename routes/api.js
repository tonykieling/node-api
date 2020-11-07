const express = require("express");
const router  = express.Router();

const pingController = require("../controllers/ping.js");

// the post controller binder definition
const postController = require("../controllers/post.js");


// one route right now, but it can be added more routes as soon as the system gets more complexity
router.get("/ping", pingController.simplePing);
router.get("/posts", postController.simplePost);

module.exports = router;