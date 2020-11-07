const express = require("express");
const router  = express.Router();

/**
 * it is used to answer a invalid route's request
 * the message can be manipulate via its binder
 */

 const MESSAGE = "Please specify a route";

router.get("/", (request, response) => {
  console.log("inside noroute route");
  return response.json({error: MESSAGE});
});



module.exports = router;