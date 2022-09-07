import React from 'react';
import Title from '../Title';
import differenceInYears from 'date-fns/differenceInYears';
import Gallery from './Gallery';
import { Stack, Typography } from '@mui/material';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
];

const Aboutme = () => {
  return (
    <Stack spacing={2}>
      <Title title="About me" />
      <Typography color="textSecondary" align="justify">
        Hi. My name is Thiago Issao Yasunaka and i am{' '}
        {differenceInYears(new Date(), new Date(1999, 12, 22))} years old. My
        hobbies are programming, finance & all kind of sports, like soccer, bike
        & running. Currently i am working at{' '}
        <a rel="noreferrer" href="https://www.teceo.co/" target="_blank">
          teceo
        </a>{' '}
        as a front-end developer.
      </Typography>
      <Gallery images={images} />
    </Stack>
  );
};
export default Aboutme;
