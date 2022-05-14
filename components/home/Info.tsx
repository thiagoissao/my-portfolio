import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Title from '../Title';
import ExperienceCard from './ExperienceCard';
import Image from 'next/image';
import differenceInYears from 'date-fns/differenceInYears';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.spacing(3),
  },
  root: {
    minHeight: '100vh',
  },
}));

const Info = () => {
  const classes = useStyles();
  const width = useWidth();
  return (
    <Box padding={0}>
      <Grid
        container
        justify="space-between"
        spacing={2}
        className={classes.root}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Box marginY={3} padding={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Title title="About me" />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item>
                    <Image
                      className={classes.image}
                      alt="Thiago Yasunaka"
                      width={500}
                      height={500}
                      src="/profile.jpg"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary" align="justify">
                  Hi. My name is Thiago Issao Yasunaka and i am{' '}
                  {differenceInYears(new Date(), new Date(1999, 12, 22))} years
                  old. My hobbies are soccer (since i was born), bike,
                  programming and finance. Currently i am working at EurekaLabs
                  as a front-end developer.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box marginY={3} padding={3}>
            <Grid container spacing={6}>
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Info;
