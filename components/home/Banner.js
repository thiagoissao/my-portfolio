import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import { FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(banner.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  bannerRoot: {
    position: 'relative',
  },
  container: {
    position: 'absolute',
    top: '30%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70
  },
  iconButton: {
    color: 'white',
    fontSize: 25
  }
}))


const Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.bannerRoot}>
      <Container maxWidth='md'>
        <Grid container xs={6} className={classes.container}>
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
          <Grid item xs={6}>
            <Fade in={true} timeout={3000}>
              <Grid container justify='space-between'>
                <Grid item>
                  <IconButton className={classes.iconButton}>
                    <FaLinkedin />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton className={classes.iconButton}>
                    <FaInstagram />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton className={classes.iconButton}>
                    <FaFacebookSquare />
                  </IconButton>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.img} />
    </div >
  )
}
export default Banner