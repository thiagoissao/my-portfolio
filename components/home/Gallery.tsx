import React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import useWidth from '../../hooks/useWidth';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const width = useWidth();
  return (
    <Grid container justifyContent="center">
      {images.map(image => {
        return (
          <Grid item key={image} sm={6}>
            <Box margin={1}>
              <Image
                objectFit="cover"
                style={{ borderRadius: 24 }}
                alt={image}
                src={image}
                width={width === 'xs' ? 300 : 400}
                height={width === 'xs' ? 300 : 400}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Gallery;
