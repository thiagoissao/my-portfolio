import { Box, Stack, Typography } from '@mui/material';
import { format, getYear } from 'date-fns';
import Image from 'next/image';

interface HeaderProps {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImage: string;
}

const Header = ({
  title,
  description,
  createdAt,
  readingTime,
  coverImage,
}: HeaderProps) => (
  <Stack spacing={1}>
    <Stack>
      <Typography variant="body2" color="textSecondary">
        Created on {format(new Date(createdAt), 'dd/MM/yyyy HH:mm')}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {readingTime.text}
      </Typography>
    </Stack>
    <Typography variant="h3" color="textPrimary">
      {title}
    </Typography>
    <Typography color="textSecondary">{description}</Typography>
    {coverImage && (
      <Stack alignItems="center">
        <Box position="relative" width="100%" height={400}>
          <Image fill src={coverImage} alt={title} />
        </Box>
        <Typography variant="body2" component="cite">
          unsplash {getYear(new Date(createdAt))}
        </Typography>
      </Stack>
    )}
  </Stack>
);

export default Header;
