import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  heading: {
    color: "rgba(143,0,35)",
    
  },
  img: {
    marginRight: "75px",
    alignItems: "space-between",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
    display: "flex",
    borderRadius: 15,
    padding: "10px 50px",
    background: 'khaki',
    
  },
  [theme.breakpoints.down('sm')] : {  // this part works only for de
      mainContainer: {
          flexDirection:"column-reverse"
      }
  }
}));

/* 
...reference for myself...@Ashenafi Jan 2022, MIU.
makeStyles is a function from Material-UI that allows us to create CSS classes and 
rules using JavaScript objects.
we can refer it at https://mui.com/styles/advanced/
*/
