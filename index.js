const { response } = require("express");
const express = require("express");
const server  = express();
const PORT    = process.env.PORT || 3456;

const apiRoutes    = require("./routes/api.js")
// it goes to the express router
server.use("/api", apiRoutes);

const invalidRoute  = require("./routes/invalidRoute.js");
// this route is gonna be called when the client did not provide a valid route
server.use("*", invalidRoute);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));