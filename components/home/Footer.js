import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  link: {
    color: 'white',
    fontSize: 13,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold'
    }
  },
  divider: {
    width: 2,
    height: 10,

  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems='center'>
        <Grid item>
          <Typography className={classes.title}>
            Icons Link:
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/41945/universidade'>
            University
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>|</Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/Sv6BXPMu7xjY/web-design'>
            Web Design
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>|</Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/13615/iphone'>
            Cellphone
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>|</Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/Nlsua06Gvxel/reagir'>
            ReactJS
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>|</Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/1ZSHk8m9bk4p/javascript'>
            JS
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>|</Typography>
        </Grid>
        <Grid item>
          <Typography
            component='a'
            className={classes.link}
            target='_blank'
            rel='noopener'
            href='https://icons8.com/icon/gFw7X5Tbl3ss/material-ui'>
            Mui
          </Typography>
        </Grid>
      </Grid>
    </div >
  )
}
export default Footer