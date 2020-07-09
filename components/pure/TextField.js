import React from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const CssTextField = withStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: theme.spacing(2),
      },
    },
  }
}))(MuiTextField)

const TextField = props => {
  return (
    <CssTextField {...props} />
  )
}
export default TextField