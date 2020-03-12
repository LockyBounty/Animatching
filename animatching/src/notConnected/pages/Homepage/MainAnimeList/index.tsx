import React from 'react';
import { Container, Grid,Typography } from '@material-ui/core';
import useStyles from './styles';


const animeList = [
    {
      name: 'OnePiece',
      imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
    },
    {
        name: 'Onizuka',
        imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
      },{
        name: 'Naruto',
        imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
      },
      {
        name: 'DragonBall',
        imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
      },
      {
          name: 'SamuraiX',
          imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
        },{
          name: 'Gintama',
          imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
        },
        {
            name: 'Doraemon',
            imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
          },
          {
              name: 'FaryTail',
              imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
            },{
                name: 'OnePiece',
                imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
              },
              {
                  name: 'Onizuka',
                  imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
                },{
                  name: 'Naruto',
                  imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
                },
                {
                  name: 'DragonBall',
                  imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
                }
  ];

export default function MainAnimeList(){
    const classes = useStyles();

    return(
        <React.Fragment>
    
      <Container maxWidth="lg" component="div">
      <Grid container spacing={4} justify="space-evenly">
        {animeList.map(anime => (
          <Grid item xs={2} sm={2} key={anime.name}>
            
            <div className={classes.containerImage}>
            <img src={anime.imageUrl} alt={anime.name} className={classes.imageAnime}/>

            <section className={classes.sectionText}>
                <Typography variant="h6" color="textPrimary" gutterBottom className={classes.imageText}>
                {anime.name}
                </Typography>
            </section>
            
            </div>
            
          </Grid>
        ))}
      </Grid>
    </Container>
  </React.Fragment>
    )
}