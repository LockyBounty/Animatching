import { makeStyles } from '@material-ui/core/styles'



export default makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  filterList:{
      maxWidth:'300px',
      display:'flex',
      flexDirection:'row',
      border:'2px solid #c4c4c4',
  }

}));