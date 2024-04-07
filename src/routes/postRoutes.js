const express = require("express");
const router = express.Router();
const post = require("../controllers/post.controller");

router.get("/", post.getAll);
router.get("/:id", post.getId);
router.post("/", post.postCreate);
router.delete("/:id", post.postDelete);

module.exports = router;
