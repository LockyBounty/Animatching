import React from 'react';
import{ Container,Grid,Button } from '@material-ui/core';

import useStyles from './styles';


export default function Filter(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="lg" component="div" style={{margin:'30px'}}>
                <Grid container spacing={0} justify="space-evenly">
                  <div>
                  <Button variant="outlined">Name</Button>
                        <Button variant="outlined">Popdivar</Button>
                        <Button variant="outlined">Winter 2020</Button>
                        <Button variant="outlined">My Tags</Button>
                        <Button variant="outlined">My Watching</Button>
                        <Button variant="outlined">My Want to Watch</Button>
                        <Button variant="outlined">Updated</Button>
                  </div>
                    
                    
                </Grid>
             </Container>

        </React.Fragment>
        
    )
}