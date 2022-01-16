import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, TextField, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { getStudentPosts } from "../../actions/studentPosts";
import ListStudentPosts from "../ListStudentPosts/ListStudentPosts";
import AddStudentPost from "../AddStudentPost/AddStudentPost";
import useStyles from './styles'

const Home = () => {
    const myStyles = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  // As I have learnt in react native, i am using one of the material ui library ...refer: https://material-ui.com
  useEffect(() => {
    dispatch(getStudentPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Paper >
          <TextField className = {myStyles.input}  variant="outlined" name="search" label="Search..." InputProps={{
  endAdornment: (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
   )
  }}/>
        </Paper>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <ListStudentPosts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AddStudentPost currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
