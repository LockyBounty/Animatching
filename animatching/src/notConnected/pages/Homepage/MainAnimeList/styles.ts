import { makeStyles } from '@material-ui/core/styles'



export default makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  imageAnime:{
      width:'100%',
      height:'350px'
  },
  containerImage:{
      position:'relative',
      textAlign:'center',
      color:'white'
  },
  imageText:{
    color:'white'
  },
  sectionText:{
    backgroundColor:'rgba(35,46,63,.6)',
    width:'100%',
    height:'40px',
    position:'absolute',
    bottom:0,
    right:0,
    left:0
  }
}));