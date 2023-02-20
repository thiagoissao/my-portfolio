import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useWidth from '../../hooks/useWidth';
import { theme } from '../../styles/theme';
import { getBestTimeFormat } from '../../utils/dates';

const aStyle: React.CSSProperties = {
  color: theme.palette.text.primary,
  textDecoration: 'none',
};

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
  const width = useWidth();

  if (width === 'xs') {
    return (
      <Link href={article.url} target="_blank" style={aStyle} rel="noreferrer">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Image
                  style={{ borderRadius: 12 }}
                  width={100}
                  height={100}
                  src={article.imageUrl}
                  alt="Thiago Yasunaka Blog"
                />
              </Grid>
              <Grid item xs>
                <Typography color="textPrimary">
                  <b>{article.name}</b>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {formatPostTime(new Date(article.createdAt))}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary">{article.description}</Typography>
          </Grid>
        </Grid>
      </Link>
    );
  }

  return (
    <Link href={article.url} target="_blank" style={aStyle} rel="noreferrer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm="auto">
          <Image
            style={{ borderRadius: 24 }}
            width={160}
            height={160}
            src={article.imageUrl}
            alt="Thiago Yasunaka Blog"
          />
        </Grid>
        <Grid item xs>
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
        </Grid>
      </Grid>
    </Link>
  );
};

export default MediumArticle;
