import React from 'react';
import { Paper, Stack, SxProps, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const sxPaper: SxProps = {
  padding: theme.spacing(2),
};

const NavigationCard = () => {
  return (
    <Paper sx={sxPaper} variant="outlined">
      <Stack>
        <Typography color="text.secondary" gutterBottom variant="h6">
          Navigate to
        </Typography>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <HomeRoundedIcon color="primary" />
              <Typography color="text.primary">Home</Typography>
            </Stack>
          </a>
        </Link>
      </Stack>
    </Paper>
  );
};

export default NavigationCard;
