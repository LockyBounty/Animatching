import React from 'react';
import { Card,CardHeader,CardContent } from '@material-ui/core';
import useStyles from './styles';


const animeList = [
    {
      name: 'OnePiece',
      imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
    },
    {
        name: 'OnePiece',
        imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
      },{
        name: 'OnePiece',
        imageUrl:"https://adala-news.fr/wp-content/uploads/2019/03/One-Piece-arc-Reverie-image.jpg",
      },
  ];

export default function TopAnime(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                className={classes.cardHeader}
                
                    title="Top Airing Anime"
                />

                <CardContent>
                    <div>
                    {animeList.map((anime,index) => (
                        <section className={classes.containerAnime} key={index}>
                            <p className={classes.positionAnime}>#{index}</p>
                            <img src={anime.imageUrl} alt={anime.name} className={classes.animeImage}/>
                                <section>
                                    <p>{anime.name}</p>
                                </section>
                            </section>
                        ))}  
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}