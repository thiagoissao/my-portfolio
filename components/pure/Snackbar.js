import React from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  alert: {
    borderRadius: theme.spacing(2),
    backgroundColor: '#fff',
    borderWidth: theme.spacing(1 / 4)
  }
}))

const Alert = props =>
  <MuiAlert elevation={6} variant='outlined' {...props} />

const Snackbar = ({ open, onClose, message, severity }) => {
  const classes = useStyles()
  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        className={classes.alert}
        onClose={onClose}
        severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

export default Snackbar
