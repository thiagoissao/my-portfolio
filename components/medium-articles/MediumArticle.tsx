import { Grid, Paper, Typography, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';
import { getBestTimeFormat } from '../../utils/dates';

const useStyles = makeStyles(theme => ({
  a: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  img: {
    borderRadius: theme.spacing(3),
  },
}));

export const formatPostTime = date => {
  const { type, time } = getBestTimeFormat(date);
  switch (type) {
    case 'hours':
      return `Postado ${time} hora(s) atrás`;
    case 'days':
      return `Postado ${time} dia(s) atrás`;
    case 'months':
      return `Postado ${time} mês(es) atrás`;
    case 'years':
      return `Postado ${time} ano(s) atrás`;
    default:
      return time === 0 ? `Postado agora` : `Postado ${time} minuto(s) atrás`;
  }
};

const MediumArticle = ({ article }) => {
  const classes = useStyles();
  return (
    <a
      href={article.url}
      target="_blank"
      className={classes.a}
      rel="noreferrer"
    >
      <Grid container spacing={1}>
        <Grid item>
          <Image
            className={classes.img}
            width={160}
            height={160}
            src={article.imageUrl}
            alt="Thiago Yasunaka Blog"
          />
        </Grid>
        <Grid item xs>
          <Box padding={2}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">
                  {formatPostTime(new Date(article.createdAt))}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary">
                  <b>{article.name}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary">
                  {article.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </a>
  );
};

export default MediumArticle;
