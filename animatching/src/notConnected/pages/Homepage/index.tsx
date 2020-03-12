import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainAnimeList from './MainAnimeList';
import TopAnime from './TopAnime';
import TopUpcoming from './TopUpcoming';
import Filter from './Filter';
import { Grid } from '@material-ui/core';

export default  function Homepage(){
  return(
    <div>
      <Header/>
      <main style={{marginTop:'20px'}}>
        <Grid container>
        <Grid xs={9} md={9} lg={9}>
          <Filter/>
          </Grid>
          <Grid xs={9} md={9} lg={9}>
           <MainAnimeList/>
          </Grid>
          <Grid xs={3} md={3} lg={3} >
           <TopAnime/>
           <TopUpcoming/>
          </Grid>
        </Grid>
      
       
      </main>
      
      <Footer/>
    </div>
  )
}
