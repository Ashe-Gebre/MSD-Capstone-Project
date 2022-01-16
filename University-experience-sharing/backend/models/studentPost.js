const mongoose = require("mongoose");

const studentPostSchema = mongoose.Schema({
  studentName: String,
  university: String,
  nationality: String,
  message: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const StudentPost = mongoose.model("StudentPost", studentPostSchema);

module.exports = StudentPost;
