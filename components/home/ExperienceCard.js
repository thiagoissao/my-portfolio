import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  typography: {
    color: '#fff'
  },
  icon: {
    width: 90,
    height: 90,
    // backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(2),
    // borderRadius: theme.spacing(2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.9
  },
  description: {
    fontSize: 14,
  }
}))

const ExperienceCard = ({ title, description, urlIcon }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item >
            <div
              style={{
                backgroundImage: `url(${urlIcon})`,
              }}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item>
            <Typography
              align='center'
              className={classNames(classes.typography, classes.title)}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item>
            <Typography
              align='center'
              className={classNames(classes.typography, classes.description)}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default ExperienceCard