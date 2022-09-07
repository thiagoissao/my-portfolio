import { Stack, Typography } from '@mui/material';
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
  <Stack spacing={1}>
    <Stack>
      <Typography variant="body2" color="textSecondary">
        Published on {date}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {readingTime.text}
      </Typography>
    </Stack>
    <Typography variant="h3" color="textPrimary">
      {title}
    </Typography>
    <Typography color="textSecondary">{description}</Typography>
  </Stack>
);

export default Header;
