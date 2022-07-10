import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../Title';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="Experiences" />
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
  );
};
export default Experiences;
