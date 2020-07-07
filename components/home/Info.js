import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(banner2.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  profile: {
    width: 300,
    height: 300,
    backgroundImage: 'url(profile.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    boxShadow: theme.shadows[8],
    border: `3px solid white`,
    [theme.breakpoints.only('xs')]: {
      width: 250,
      height: 250
    }
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    [theme.breakpoints.only('xs')]: {
      fontSize: 30
    }
  },
  styleSub: {
    width: 120,
    height: theme.spacing(1 / 2),
    borderRadius: theme.spacing(2),
    backgroundColor: 'white'
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  experience: {
    fontSize: 20,
    color: 'white'
  }
}))

const Info = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <div
          style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)) 90%',
            position: 'absolute',
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ zIndex: 2 }}>
        <Box my={5}>
          <Container maxWidth='md'>
            <Grid container justify='space-between'>
              <Grid item xs={12} sm={4} style={{ padding: 24 }}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item>
                        <Typography className={classes.title}>
                          About me
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <div className={classes.styleSub} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify='center'>
                      <Grid item>
                        <div className={classes.profile} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className={classes.experience}>
                      Hi. My name is Thiago Issao Yasunaka and i am 20 years old.
                      Nowadays, my hobbies are soccer (since i was born haha), bike, programming and
                      economy.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography className={classes.subtitle}>Professional experience</Typography>
                      </Grid>
                      <Grid item>
                        <div className={classes.styleSub} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.experience}>
                      <li>Third year computer science student at Universidade
                      Estadual de Maringá in Paraná/Brazil.
                      </li>
                      <li>
                        Front-end developer for about one year at EurekaLabs.
                        Using react and material-ui framework.
                      </li>
                      <li>
                        Basics knowledge in docker, feathersJS, nextJS and sequelize.
                      </li>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Container>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Info