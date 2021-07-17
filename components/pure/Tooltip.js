import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MuiTooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const Tooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: theme.spacing(2),
    fontWeight: '500',
  },
  arrow: {
    color: theme.palette.primary.main,
  },
}))(MuiTooltip)

export default Tooltip
