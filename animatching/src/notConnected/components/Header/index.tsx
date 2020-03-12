import React from 'react';
import { AppBar,Typography,Link,Button,Toolbar,CssBaseline} from '@material-ui/core';
import useStyles from './styles';

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Animatching
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Mangas
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Animes
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Faq
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );
}