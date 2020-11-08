const express = require("express");
const router  = express.Router();

/**
 * it is used to answer a invalid route's request
 * the message can be manipulate via its binding
 */

 const MESSAGE = "Please, provide a valid route.";

router.get("/", (request, response) => {
  console.log("inside nonroute route");
  return response.json({error: MESSAGE});
});



module.exports = router;