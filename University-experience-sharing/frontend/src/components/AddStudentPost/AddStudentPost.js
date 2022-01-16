import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"; // useSelector is usefull to fetchdata in redux...@ashenafi Jan 2022.

import useStyles from "./styles";
import {
  createStudentPost,
  updateStudentPost,
} from "../../actions/studentPosts";

const AddStudentPost = ({ currentId, setCurrentId }) => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    nationality: "",
    university: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const studentPost = useSelector((state) =>
    currentId
      ? state.studentPosts.find((message) => message._id === currentId)
      : null
  );

  //   console.log(studentPosts);
  //   console.log(currentId);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (studentPost) setStudentData(studentPost);
  }, [studentPost]);

  const clear = () => {
    setCurrentId(null);
    setStudentData({
      studentName: "",
      nationality: "",
      university: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createStudentPost(studentData));
      clear();
    } else {
      dispatch(updateStudentPost(currentId, studentData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing Your Experience` : "Add Your Experience"}
        </Typography>
        <TextField
          name="Student Name"
          variant="outlined"
          label="Student Name"
          fullWidth
          value={studentData.studentName}
          onChange={(e) =>
            setStudentData({ ...studentData, studentName: e.target.value })
          }
        />
        <TextField
          name="nationality"
          variant="outlined"
          label="Your Country of Origin"
          fullWidth
          value={studentData.nationality}
          onChange={(e) =>
            setStudentData({ ...studentData, nationality: e.target.value })
          }
        />
        <TextField
          name="university"
          variant="outlined"
          label="Your University"
          fullWidth
          value={studentData.university}
          onChange={(e) =>
            setStudentData({ ...studentData, university: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Text Your Experience"
          fullWidth
          multiline
          rows={5}
          value={studentData.message}
          onChange={(e) =>
            setStudentData({ ...studentData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (keywords, comma separated)"
          fullWidth
          value={studentData.tags}
          onChange={(e) =>
            setStudentData({ ...studentData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setStudentData({ ...studentData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color= 'primary'
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default AddStudentPost;
