
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';//
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeStudentPost, deleteStudentPost } from '../../../actions/studentPosts';
import useStyles from './styles';

const StudentPost = ({studentPost,setCurrentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
//console.log('Ashenafi 1', studentPost);
const handleComment= ()=>{

}

  return (
      
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={studentPost.selectedFile } university={studentPost.university} />
      <div className={classes.overlay}>
        <Typography variant="h5">{studentPost.studentName}<Typography variant="body1">{studentPost.nationality}</Typography></Typography>
        <Typography variant="body2">{moment(studentPost.createdAt).fromNow()}</Typography> 
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(studentPost._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{studentPost.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{studentPost.university}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{studentPost.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeStudentPost(studentPost._id))}><ThumbUpAltIcon fontSize="small" /> Like {studentPost.likeCount} </Button>
        <Button size="small" color="secondary" onClick={() => dispatch(deleteStudentPost(studentPost._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
      <Button style={{ marginTop: '10px' }} fullWidth  color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
    </Card>
  );
};

export default StudentPost;