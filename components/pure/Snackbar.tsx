import React from 'react';
import MuiSnackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const Snackbar = ({ open, onClose, message, severity }: SnackbarProps) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
