import React from 'react';
import Typography from '@material-ui/core/Typography';

type TitleProps = {
  title: string;
  isSubtitle?: boolean;
};

const Title = ({ title, isSubtitle }: TitleProps) => {
  return (
    <Typography color="primary" variant={isSubtitle ? 'h4' : 'h3'}>
      {title}
    </Typography>
  );
};

Title.defaultProps = {
  isSubtitle: false,
};
export default Title;
