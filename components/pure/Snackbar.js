import React from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />

const Snackbar = ({ open, onClose, message, severity }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      severity={severity}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

export default Snackbar
