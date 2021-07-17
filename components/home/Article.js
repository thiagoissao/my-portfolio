import { Grid, Paper, Typography, Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
import { getBestTimeFormat } from '../../utils/dates'

const useStyles = makeStyles((theme) => ({
  a: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
    [theme.breakpoints.only('xs')]: {
      height: 200,
    },
  },
  paper: {
    borderRadius: theme.spacing(2),
    minHeight: 500,
    [theme.breakpoints.only('xs')]: {
      height: 'auto',
      minHeight: 'auto',
    },
  },
}))

export const formatPostTime = (date) => {
  const { type, time } = getBestTimeFormat(date)
  switch (type) {
    case 'hours':
      return `Postado ${time} hora(s) atrás`
    case 'days':
      return `Postado ${time} dia(s) atrás`
    case 'months':
      return `Postado ${time} mês(es) atrás`
    case 'years':
      return `Postado ${time} ano(s) atrás`
    default:
      return time === 0 ? `Postado agora` : `Postado ${time} minuto(s) atrás`
  }
}

const Article = ({ article }) => {
  const classes = useStyles()
  return (
    <a href={article.url} target='_blank' className={classes.a}>
      <Paper variant='outlined' className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className={classes.imageContainer}>
              <Image
                className={classes.paper}
                src={article.imageUrl}
                alt='Thiago Yasunaka Blog'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Box padding={2}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant='body2' color='textSecondary'>
                    {formatPostTime(new Date(article.createdAt))}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' color='textPrimary'>
                    <b>{article.name}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color='textSecondary'>
                    {article.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </a>
  )
}

export default Article
