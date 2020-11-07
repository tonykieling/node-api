const { response } = require("express");
const express = require("express");
const server  = express();
const PORT    = process.env.PORT || 3456;

// const pingRoutes    = require("./routes/ping.js");
// const postRoutes    = require("./routes/post.js")
const apiRoutes    = require("./routes/api.js")
const invalidRoute  = require("./routes/invalidRoute.js");

server.use("/api", apiRoutes);
server.use("/api", apiRoutes);

server.use("*", invalidRoute);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));