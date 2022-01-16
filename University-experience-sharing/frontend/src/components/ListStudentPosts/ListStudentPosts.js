
import React from 'react';
import {useSelector} from 'react-redux';// used to fetch data
import { Grid,CircularProgress} from '@material-ui/core';

import StudentPost from './StudentPost/StudentPost';
import useStyles from "./styles";

const ListStudentPosts = ({setCurrentId}) => {
    const myStyles = useStyles();
    const studentPosts = useSelector((state)=> state.studentPosts);    // from reducers.index.js
    // console.log(studentPosts);
    return (
        !studentPosts.length ? <CircularProgress /> : ( //this is like ActivityIndicator loading spinner, if no post @Ashenafi
  <Grid className={myStyles.mainContainer} container alignItems="stretch" spacing ={3}>
        {studentPosts.map((elem) => (
          <Grid key={elem._id} item xs={12} sm={6} md={6}>
            <StudentPost studentPost={elem} setCurrentId={setCurrentId} />  
          </Grid>
        ))}

  </Grid>
        )  
    )
}

export default ListStudentPosts;