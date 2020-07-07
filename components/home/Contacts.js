import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(banner3.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}))

const Contacts = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <div
          style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.1)) 90%',
            position: 'absolute',
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ zIndex: 2 }}>

      </Grid>
    </Grid>
  )
}
export default Contacts