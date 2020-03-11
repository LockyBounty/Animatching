import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Background from "../../../assets/background/39033.png"

export default makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    sectionLogout:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolBar:{
      backgroundColor:'rgba(35,46,63,.6)',
      marginBottom:'50px',
      height:'80px',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      verticalAlign: 'middle'
    },
    header:{
      backgroundColor:'#181818',
      minHeight:'800px',
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position:'static'
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);
