import React from 'react';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';

const ExperienceCard = ({ title, description, urlIcon }) => {
  return (
    <Stack spacing={1} justifyContent="center">
      <Image
        objectFit="contain"
        width={80}
        height={80}
        src={urlIcon}
        alt="Thiago Experience"
      />
      <Typography color="textPrimary" variant="h6" align="center">
        {title}
      </Typography>
      <Typography color="textSecondary" align="center">
        {description}
      </Typography>
    </Stack>
  );
};
export default ExperienceCard;
