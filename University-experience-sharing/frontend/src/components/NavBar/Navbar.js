/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";

import image from "../../images/student-logo.png";

const Navbar = () => {
  const myStyles = useStyles();

  const logout = () => {};
  return (
    <AppBar position="static" color="inherit" className={myStyles.bar}>
      <img src={image} alt="icon" height="90" className={myStyles.img} />
      <Typography variant="h5" align="center" className={myStyles.heading}>
        <marquee behavior="slide" direction="right">
        ተማሪ |{" "}
          <b style={{ color: "purple" , fontSize:'30px'}}> University Students Experience </b> |
          {" "}оюутан 
        </marquee>
      </Typography>
      <Toolbar>
        <Button
          variant="contained"
          className={myStyles.logout}
          color="primary"
          onClick={logout}
        >
          <marquee>Welcome, Student</marquee>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
