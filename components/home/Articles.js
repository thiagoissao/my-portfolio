import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Title from '../Title'
import Article from './Article'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}))

const Articles = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Title title='My Articles' />
        </Grid>
        <Grid item xs={12}>
          <Typography color='primary'>
            One of my favorites things that i like to do when i have time is
            write some articles. You can check these articles below:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Article
                article={{
                  id: '1',
                  createdAt: new Date(2010, 12, 12).toISOString(),
                  description:
                    'This article will be written in Portuguese, so i expect you can understand it :)',
                  thumbUrl: '/images/sm.jpg',
                  title: 'React.JS— Introdução',
                  file: undefined,
                  readTime: 3,
                  main: false,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Articles
