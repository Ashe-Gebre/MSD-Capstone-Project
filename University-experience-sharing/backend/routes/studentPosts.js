const express = require("express");

const {
  deleteStudentPost,
  getStudentPosts,
  createStudentPost,
  updateStudentPost,
  likeStudentPost,
  getStudentPost,
  getStudentPostsBySearch,
} = require("../controllers/studentPostsController");

const router = express.Router();

// const { auth } = require("../middleware/auth.js");
router.post("/", createStudentPost);
router.get("/", getStudentPosts);

router.get('/:id', getStudentPost);
router.get('/search', getStudentPostsBySearch);
router.patch("/:id",  updateStudentPost);
router.delete("/:id", deleteStudentPost);
router.patch("/:id/likeStudentPost", likeStudentPost);

module.exports = router;
