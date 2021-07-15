import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '92vh',
  },
}))

const MY_PHONE_NUMBER = '5544999606841'
const MESSAGE =
  'Olá, entrei em contato com você por meio do seu site pessoal. Gostaria de ...'

const Banner = () => {
  const classes = useStyles()

  return (
    <Grid container alignItems='center' className={classes.root}>
      <Grid item xs>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Fade in>
              <Typography variant='h2' color='primary'>
                <b>Thiago Yasunaka</b>
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade in>
              <Grid container spacing={3} wrap='nowrap'>
                <Grid item>
                  <IconButton
                    color='primary'
                    target='_blank'
                    href='https://www.linkedin.com/in/thiago-yasunaka-389a69155/'
                  >
                    <FaLinkedin size={32} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color='primary'
                    target='_blank'
                    href='https://www.instagram.com/thiago.yasunaka/'
                  >
                    <FaInstagram size={32} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color='primary'
                    target='_blank'
                    href='https://www.facebook.com/thiago.yasunaka.3/'
                  >
                    <FaFacebookSquare size={32} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color='primary'
                    target='_blank'
                    href={`https://wa.me/${MY_PHONE_NUMBER}?text=${MESSAGE}`}
                  >
                    <FaWhatsapp size={32} />
                  </IconButton>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Banner
