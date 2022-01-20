/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, TextField, Paper, Typography } from "@material-ui/core";
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
          <TextField className = {myStyles.input}  variant="outlined" name="search" label="Search..."  InputProps={{
  endAdornment: (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
   )
  }}/>
        </Paper>
        <Grid
          container
          justifyContent="space-between"
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
        <br/>
        <marquee><Typography style = {{fontSize:'x-large', color: "brown", fontStretch:'extra-expanded'}}> This is a <i style = {{color:'green'}}> University Student Experience Sharing Website </i> for school practice by <b style = {{color: "#4a54f1"}}>Ashenafi Gebretekle </b>with Professor <b style = {{color: "#4a54f1"}}>Unubold Tumenbayar</b> for the course CS566 at <b style = {{color: "#4a54f1"}}>Maharishi International University</b>, January 2021</Typography> </marquee>
        <hr/>
      </Container>
    </Grow>
  );
};

export default Home;
