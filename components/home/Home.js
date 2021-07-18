import React, { useState, useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Container, Divider, makeStyles, Grow } from '@material-ui/core'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Fab from '@material-ui/core/Fab'
import Banner from './Banner'
import Info from './Info'
import Articles from './Articles'
import Contact from './Contact'

const useStyles = makeStyles((theme) => ({
  fabContainer: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

const Home = () => {
  const classes = useStyles()

  const [section, setSection] = useState('banner')

  const bannerRef = useRef()
  const infoRef = useRef()
  const articlesRef = useRef()
  const contactRef = useRef()

  const handleClickArrowUp = (currentSection) => {
    switch (currentSection) {
      case 'info':
        setSection('banner')
        scrollTo(bannerRef)
        return
      case 'articles':
        setSection('info')
        scrollTo(infoRef)
        return
      case 'contact':
        setSection('articles')
        scrollTo(articlesRef)
        return
      default:
        break
    }
  }

  const handleClickArrowDown = (currentSection) => {
    switch (currentSection) {
      case 'banner':
        setSection('info')
        scrollTo(infoRef)
        return
      case 'info':
        setSection('articles')
        scrollTo(articlesRef)
        return
      case 'articles':
        setSection('contact')
        scrollTo(contactRef)
        return
      default:
        break
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.fabContainer}>
        <Grid direction='column' container spacing={1}>
          <Grow in={section !== 'banner'}>
            <Grid item>
              <Fab
                color='primary'
                size='small'
                onClick={() => handleClickArrowUp(section)}
              >
                <FaAngleUp />
              </Fab>
            </Grid>
          </Grow>
          <Grow in={section !== 'contact'}>
            <Grid item>
              <Fab
                color='primary'
                size='small'
                onClick={() => handleClickArrowDown(section)}
              >
                <FaAngleDown />
              </Fab>
            </Grid>
          </Grow>
        </Grid>
      </div>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} ref={bannerRef}>
            <Banner />
          </Grid>
          <Grid item xs={12}>
            <Box marginY={4}>
              <Divider light variant='middle' />
            </Box>
          </Grid>
          <Grid item xs={12} ref={infoRef}>
            <Info />
          </Grid>
          <Grid item xs={12}>
            <Box marginY={4}>
              <Divider light variant='middle' />
            </Box>
          </Grid>
          <Grid item xs={12} ref={articlesRef}>
            <Articles />
          </Grid>
          <Grid item xs={12}>
            <Box marginY={4}>
              <Divider light variant='middle' />
            </Box>
          </Grid>
          <Grid item xs={12} ref={contactRef}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
