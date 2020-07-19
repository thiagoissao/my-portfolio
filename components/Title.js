import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    [theme.breakpoints.only('xs')]: {
      fontSize: 30
    }
  },
  styleSub: {
    width: '100%',
    height: theme.spacing(1 / 4),
    borderRadius: theme.spacing(2),
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
}))

const Title = ({ title, isSubtitle, color }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          style={{
            color: color === 'primary' ? theme.palette.primary.main : '#fff'
          }}
          className={isSubtitle ? classes.subtitle : classes.title}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            backgroundColor: color === 'primary' ? theme.palette.primary.main : '#fff'
          }}
          className={classes.styleSub}
        />
      </Grid>
    </Grid>
  )
}
export default Title