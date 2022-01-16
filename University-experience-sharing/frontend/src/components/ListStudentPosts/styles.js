import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

/* 
...reference for myself...@Ashenafi Jan 2022, MIU.
makeStyles is a function from Material-UI that allows us to create CSS classes and 
rules using JavaScript objects.
we can refer it at https://mui.com/styles/advanced/
*/
