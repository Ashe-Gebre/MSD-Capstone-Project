const mongoose = require('mongoose');
const StudentPost = require("../models/studentPost");

module.exports.getStudentPosts = async (req, res) => {
  try {
    const studentPost = await StudentPost.find();
    // console.log(studentPost);
    res.status(200).json(studentPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.createStudentPost = async (req, res) => {
  const payload = req.body;
  const newStudentPost = new StudentPost(payload);

  try {
    await newStudentPost.save();
    res.status(201).json(newStudentPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.deleteStudentPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Invalid Id:  ${id}`);

  await StudentPost.findByIdAndRemove(id);

  res.json({ message: "Student post deleted successfully." });
}

module.exports.updateStudentPost = async (req, res) => {
  const { id } = req.params;
  const { studentName, nationality, message, university, selectedFile, tags } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Invalid ID : ${id}`);

  const updatedStudentPost = {
    studentName,
    university,
    nationality,
    message,
    tags,
    selectedFile,
    _id: id,
  };
console.log(updatedStudentPost)
  await StudentPost.findByIdAndUpdate(id, updatedStudentPost, { new: true });

  res.json(updatedStudentPost);
};


module.exports.likeStudentPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Invalid id: ${id}`);
  
  const studentPost = await StudentPost.findById(id);

  const updatedPost = await StudentPost.findByIdAndUpdate(id, { likeCount: studentPost.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);
}

module.exports.getStudentPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
      const title = new RegExp(searchQuery, "i");

      const posts = await StudentPost.find({ $or: [ { nationality}, { tags: { $in: tags.split(',') } } ]});

      res.json({ data: posts });
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}
module.exports.getStudentPost = async (req, res) => { 
  const { id } = req.params;

  try {
      const post = await StudentPost.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}