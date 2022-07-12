import { Grid, Typography } from '@material-ui/core';
import React from 'react';

interface HeaderProps {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
}

const Header = ({ title, description, date, readingTime }: HeaderProps) => (
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Published on {date}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {readingTime.text}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h3" color="textPrimary">
        {title}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography color="textSecondary">{description}</Typography>
    </Grid>
  </Grid>
);

export default Header;
