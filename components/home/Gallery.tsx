import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Grid spacing={1} container>
      {images.map(image => {
        return (
          <Grid item key={image}>
            <Image
              objectFit="cover"
              style={{ borderRadius: 24 }}
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
