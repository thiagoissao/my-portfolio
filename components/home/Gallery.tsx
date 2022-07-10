import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

const useStyles = makeStyles(theme => ({
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(3),
  },
}));

const Gallery = ({ images }: GalleryProps) => {
  const classes = useStyles();

  return (
    <Grid spacing={1} container>
      {images.map(image => {
        return (
          <Grid item key={image}>
            <Image
              className={classes.image}
              alt={image}
              src={image}
              width={400}
              height={400}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Gallery;
