const express = require("express");
const router = express.Router();
const cooment = require("../controllers/comment.controller");

router.post("/:postId", cooment.commentCreate);
router.delete("/:id", cooment.commentDelete);

module.exports = router;
