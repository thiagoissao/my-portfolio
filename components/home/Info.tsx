import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Title from '../Title';
import ExperienceCard from './ExperienceCard';
import Image from 'next/image';
import differenceInYears from 'date-fns/differenceInYears';
import Gallery from './Gallery';

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.spacing(3),
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title title="About me" />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <Gallery images={['/profile.jpg', '/me.jpeg']} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary" align="justify">
              Hi. My name is Thiago Issao Yasunaka and i am{' '}
              {differenceInYears(new Date(), new Date(1999, 12, 22))} years old.
              My hobbies are soccer (since i was born), bike, programming and
              finance. Currently i am working at EurekaLabs as a front-end
              developer.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title title="Experience" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/degree.png"
                  title="University"
                  description="Last year computer science student at UEM in Brazil."
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/web-design.png"
                  title="Web Design"
                  description="Website developer using React framework NextJS."
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/phone.png"
                  title="Responsible Design"
                  description="Website developer with mobile support."
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/react.png"
                  title="React JS"
                  description="Create visual components using material-ui framework."
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/js.png"
                  title="Javascript & Typescript"
                  description="Experience with both languages, Typescript and Javascript."
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <ExperienceCard
                  urlIcon="/material-ui.png"
                  title="Material-ui"
                  description="Building components using material design principles."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Info;
