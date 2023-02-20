import { Stack, Typography } from '@mui/material';
import differenceInYears from 'date-fns/differenceInYears';
import Title from '../Title';
import Gallery from './Gallery';

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
        hobbies are programming, finance & all kind of sports, for example:
        Soccer, bike & running. Currently i am working at{' '}
        <a rel="noreferrer" href="https://www.teceo.co/" target="_blank">
          teceo
        </a>{' '}
        as a software engineer.
      </Typography>
      <Gallery images={images} />
    </Stack>
  );
};
export default Aboutme;
