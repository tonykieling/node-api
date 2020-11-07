const { response } = require("express");
const express = require("express");
const server  = express();
const PORT    = process.env.PORT || 3456;

const pingRoutes    = require("./routes/ping.js");
const postRoutes    = require("./routes/post.js")
const invalidRoute  = require("./routes/invalidRoute.js");

server.use("/ping", pingRoutes);
server.use("/posts", postRoutes);

server.use("*", invalidRoute);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));