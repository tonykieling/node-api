const express = require("express");
const router  = express.Router();

/**
 * it is used to answer a invalid route's request
 */

router.get("/", (request, response) => {
  console.log("inside noroute route");
  return response.json({error: "Please specify a route"});
});



module.exports = router;