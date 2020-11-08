const express = require("express");
const router  = express.Router();

// ping controller binding definition
const pingController = require("../controllers/ping.js");

// post controller binding definition
const postController = require("../controllers/post.js");


// ping api caller
router.get("/ping", pingController.simplePing);

// posts api caller
router.get("/posts", postController.simplePost);



module.exports = router;