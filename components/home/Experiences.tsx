import React from 'react';
import Title from '../Title';
import ExperienceCard from './ExperienceCard';
import { Stack, Grid, Box } from '@mui/material';

const Experiences = () => {
  return (
    <Stack spacing={2}>
      <Title title="Experiences" />
      <Box padding={1}>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={6}>
            <ExperienceCard
              urlIcon="/degree.png"
              title="University"
              description="Computer Scientist at Universidade Estadual de Maringá in Brazil."
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
      </Box>
    </Stack>
  );
};
export default Experiences;
