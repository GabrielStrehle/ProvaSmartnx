require("dotenv").config();

const express = require("express");
const postRoute = require("./routes/postRoutes");
const commentRoute = require("./routes/commentRoutes");

const app = express();

app.use(express.json());
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

module.exports = app;
