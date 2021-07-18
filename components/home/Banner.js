import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, Typography } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaMedium,
} from 'react-icons/fa'
import Image from 'next/image'
import useWidth from '../../hooks/useWidth'
import Tooltip from '../pure/Tooltip'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
  },
  me: {
    borderRadius: '100%',
  },
}))

const MY_PHONE_NUMBER = '5544999606841'
const MESSAGE =
  'Olá, entrei em contato com você por meio do seu site pessoal. Gostaria de ...'

const Banner = () => {
  const classes = useStyles()
  const width = useWidth()

  return (
    <Grid container alignItems='center' className={classes.root}>
      <Grid item xs>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Fade in>
              <Grid container alignItems='center' spacing={2}>
                <Hidden only='xs'>
                  <Grid item>
                    <Image
                      alt='Thiago Yasunaka Profile'
                      width={100}
                      height={100}
                      src='/me.jpg'
                      className={classes.me}
                    />
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid item xs={12}>
                    <Grid container justify='center'>
                      <Grid item>
                        <Image
                          alt='Thiago Yasunaka Mobile Profile'
                          width={100}
                          height={100}
                          src='/me.jpg'
                          className={classes.me}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Grid item xs>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant={width === 'xs' ? 'h4' : 'h2'}
                        color='primary'
                        align={width === 'xs' ? 'center' : 'left'}
                      >
                        <b>Thiago Yasunaka</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        color='primary'
                        align={width === 'xs' ? 'center' : 'left'}
                      >
                        Computer Scientist & Software Developer
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Fade in>
                        <Grid
                          container
                          wrap='nowrap'
                          justify={width === 'xs' ? 'center' : 'flex-start'}
                        >
                          <Grid item>
                            <Tooltip arrow title='Linkedin'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href='https://www.linkedin.com/in/thiago-yasunaka-389a69155/'
                              >
                                <FaLinkedin size={width === 'xs' ? 24 : 32} />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                          <Grid item>
                            <Tooltip arrow title='Instagram'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href='https://www.instagram.com/thiago.yasunaka/'
                              >
                                <FaInstagram size={width === 'xs' ? 24 : 32} />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                          <Grid item>
                            <Tooltip arrow title='Facebook'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href='https://www.facebook.com/thiago.yasunaka.3/'
                              >
                                <FaFacebookSquare
                                  size={width === 'xs' ? 24 : 32}
                                />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                          <Grid item>
                            <Tooltip arrow title='Whatsapp'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href={`https://wa.me/${MY_PHONE_NUMBER}?text=${MESSAGE}`}
                              >
                                <FaWhatsapp size={width === 'xs' ? 24 : 32} />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                          <Grid item>
                            <Tooltip arrow title='Github'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href='https://github.com/thiagoissao'
                              >
                                <FaGithub size={width === 'xs' ? 24 : 32} />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                          <Grid item>
                            <Tooltip arrow title='Medium'>
                              <IconButton
                                color='primary'
                                target='_blank'
                                href='https://medium.com/@thiagoyasunaka'
                              >
                                <FaMedium size={width === 'xs' ? 24 : 32} />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      </Fade>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <Image
                alt='Social Medias'
                width={400}
                height={200}
                src='/my-social-medias.png'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs>
          <Image alt='Banner' width={700} height={700} src='/banner.png' />
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Banner
