import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  logout: {
    marginLeft: "92px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  heading: {
    color: "rgba(143,0,35)",
    textDecoration: "none",
    justifyContent: "space-between",
  },
  img: {
    marginRight: "85px",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
    display: "flex",
    borderRadius: 15,
    padding: "10px 50px",
    background: "khaki",
  },
  [theme.breakpoints.down("sm")]: {
    // this part works only for small devices ...@docs....below
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
