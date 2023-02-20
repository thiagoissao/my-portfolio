import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const ExperienceCard = ({ title, description, urlIcon }) => {
  return (
    <Stack spacing={1} justifyContent="center">
      <Box width="100%" display="flex" justifyContent="center">
        <Image
          width={80}
          height={80}
          quality={25}
          src={urlIcon}
          alt="Thiago Experience"
        />
      </Box>
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
