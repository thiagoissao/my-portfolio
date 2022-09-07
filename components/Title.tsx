import { Typography } from '@mui/material';
import React from 'react';

type TitleProps = {
  title: string;
  isSubtitle?: boolean;
};

const Title = ({ title, isSubtitle }: TitleProps) => {
  return (
    <Typography color="textPrimary" variant={isSubtitle ? 'h4' : 'h3'}>
      {title}
    </Typography>
  );
};

Title.defaultProps = {
  isSubtitle: false,
};
export default Title;
