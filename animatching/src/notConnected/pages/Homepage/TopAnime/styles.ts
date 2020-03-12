import { makeStyles } from '@material-ui/core/styles'



export default makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    maxWidth: 345,
  },
  cardHeader:{
    backgroundColor:'#f5f5f5'
  },
  containerAnime:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:'6px',
  },
  animeImage:{
      width:'50px',
      height:'100px'
  },
  positionAnime:{
      color:'#484848',
      fontWeight:'bold',
      fontSize:'24px'
  }
}));