import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 10,
    color: 'white',
  }
}))

const MadeByText = ({ photoUrl, personName }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} alignItems='center'>
      <Grid item>
        <Typography className={classes.text}>
          Photo by
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component='a'
          href={photoUrl}
          target='_blank'
          rel='noopener'
          className={classes.text}
        >
          {personName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
          on
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={classes.text}
          component='a'
          href='https://unsplash.com/'
          target='_blank'
          rel='noopener'
        >
          Unsplash
        </Typography>
      </Grid>
    </Grid>
  )
}
export default MadeByText