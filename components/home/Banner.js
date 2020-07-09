import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import { FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(banner.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    [theme.breakpoints.only('xs')]: {
      fontSize: 40
    }
  },
  iconButton: {
    color: 'white',
    fontSize: 25
  }
}))


const Banner = () => {
  const classes = useStyles()
  return (
    <Grid container alignItems='center' className={classes.root}>
      <Grid item xs={12}>
        <Grid container>
          <Container maxWidth='md' >
            <Grid item xs={12}>
              <Fade in={true} timeout={1200}>
                <Typography className={classes.title}>
                  Thiago
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12}>
              <Fade in={true} timeout={2500}>
                <Typography className={classes.title}>
                  Yasunaka
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={7} md={6} lg={4}>
              <Fade in={true} timeout={3000}>
                <Grid container justify='space-between'>
                  <Grid item>
                    <IconButton
                      target='_blank'
                      href='https://www.linkedin.com/in/thiago-yasunaka-389a69155/'
                      className={classes.iconButton}
                    >
                      <FaLinkedin />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      target='_blank'
                      href='https://www.instagram.com/thiago.yasunaka/'
                      className={classes.iconButton}>
                      <FaInstagram />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      target='_blank'
                      href='https://www.facebook.com/thiago.yasunaka.3/'
                      className={classes.iconButton}>
                      <FaFacebookSquare />
                    </IconButton>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Banner