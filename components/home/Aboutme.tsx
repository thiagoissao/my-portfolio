import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import differenceInYears from 'date-fns/differenceInYears';
import Gallery from './Gallery';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
];

const Aboutme = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="About me" />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary" align="justify">
          Hi. My name is Thiago Issao Yasunaka and i am{' '}
          {differenceInYears(new Date(), new Date(1999, 12, 22))} years old. My
          hobbies are programming, finance & all kind of sports, like soccer,
          bike & running. Currently i am working at{' '}
          <a rel="noreferrer" href="https://www.teceo.co/" target="_blank">
            teceo
          </a>{' '}
          as a front-end developer.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Gallery images={images} />
      </Grid>
    </Grid>
  );
};
export default Aboutme;
