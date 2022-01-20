import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },

  paper: {
    padding: theme.spacing(2),
  },
  input: {
    borderRadius: "89px",
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    alighItems: "center",
    justifyContent: "center",
    textAlign:"center"
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));