import React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CssButton = withStyles(theme => ({
  root: {
    borderRadius: theme.spacing(2),
    minHeight: 50,
    fontWeight: 'bold',
    boxShadow: 'none',
    letterSpacing: 0.7,
    '&:hover': {
      boxShadow: 'none',
    },
  },
}))(MuiButton);

const Button = (props: ButtonProps) => {
  return <CssButton {...props} />;
};
export default Button;
