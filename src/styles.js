import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  logoContainer: {
    padding: '0.5%',
     [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
   width: '50vh',
   height: '20%',
   display: 'flex',
   borderRadius: '0%',
   marginTop: '3%',
   paddingLeft: '2%',
   marginLeft: '475px',
   marginBottom: '25px',
   [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
}));