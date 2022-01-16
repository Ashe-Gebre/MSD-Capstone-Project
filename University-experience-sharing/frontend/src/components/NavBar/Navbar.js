import React from "react";
import { Typography,AppBar,Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";

import image from "../../images/student-logo.png";

const Navbar = () => {

  const myStyles = useStyles();

  const logout=()=>{

  }
  return (
    <AppBar position="static" color="inherit" className={myStyles.bar}>
      <img src={image} alt="icon" height="90" className={myStyles.img} />
      <Typography variant="h3" align="center" className={myStyles.heading}>
        University Students Experience
      </Typography>
      <Toolbar >
      <Button variant="contained" className={myStyles.logout} color="secondary" onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>

  );
};
export default Navbar;
