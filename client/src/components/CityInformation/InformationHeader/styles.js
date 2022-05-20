import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
  },
  placeName: {
      marginLeft: theme.spacing(2)
  },
  iconBack: {
    fontSize: '26px',
    cursor: 'pointer'
  }
}));