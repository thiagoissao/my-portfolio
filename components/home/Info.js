import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import Title from '../Title'
import ExperienceCard from './ExperienceCard'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
  },
  image: {
    borderRadius: theme.spacing(2),
  }
}))

const Info = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Box m={3}>
          <Container maxWidth='lg'>
            <Grid container justify='space-between'>
              <Grid item xs={12} sm={12} md={4} style={{ marginBottom: 24 }}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Title color='primary' title='About me' />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify='center'>
                      <Grid item >
                        <Image
                          className={classes.image}
                          alt='Thiago Yasunaka'
                          width='300'
                          height='400'
                          src='/profile.jpg' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='h6' color='primary' align='justify'>
                      Hi. My name is Thiago Issao Yasunaka and i am 20 years old.
                      Nowadays, my hobbies are soccer (since i was born), bike, programming and
                      finance. Currently i'm working at EurekaLabs as a front-end developer.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Title color='primary' title='Professional experience' />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={5}>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/ultraviolet/80/000000/university.png'
                          title='University'
                          description='3° year computer science student at UEM in Brazil.'
                        />
                      </Grid>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/officel/80/000000/web-design.png'
                          title='Web Design'
                          description='Websites developer using the react framework NextJS. '
                        />
                      </Grid>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/color/96/000000/iphone.png'
                          title='Responsible Design'
                          description='Websites development with mobile support.'
                        />
                      </Grid>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/ultraviolet/80/000000/react.png'
                          title='React JS'
                          description='Create visual components using material-ui framework.'
                        />
                      </Grid>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/dusk/128/000000/javascript.png'
                          title='Javascript'
                          description='Working with JS for almost two years and learning more every day.'
                        />
                      </Grid>
                      <Grid item sm={4} xs={6}>
                        <ExperienceCard
                          urlIcon='https://img.icons8.com/color/144/000000/material-ui.png'
                          title='Material-ui'
                          description='Building components following material design principles.'
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </Grid >
  )
}
export default Info
