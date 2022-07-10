import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Tooltip, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import Image from 'next/image';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '80vh',
  },
  me: {
    borderRadius: theme.spacing(2),
  },
}));

const Banner = () => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <Fade in>
      <Grid container alignItems="center" spacing={2}>
        <Hidden only="xs">
          <Grid item>
            <Image
              alt="Thiago Yasunaka Profile"
              width={172}
              height={172}
              objectFit="cover"
              src="/me.jpeg"
              className={classes.me}
            />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <Image
                  alt="Thiago Yasunaka Mobile Profile"
                  width={172}
                  height={172}
                  objectFit="cover"
                  src="/me.jpeg"
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
                color="primary"
                align={width === 'xs' ? 'center' : 'left'}
              >
                Thiago Yasunaka
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                align={width === 'xs' ? 'center' : 'left'}
              >
                Brazilian 🇧🇷
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                align={width === 'xs' ? 'center' : 'left'}
              >
                Computer Scientist & Software Engineer
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                wrap="nowrap"
                justify={width === 'xs' ? 'center' : 'flex-start'}
              >
                <Grid item>
                  <Tooltip arrow title="Linkedin">
                    <IconButton
                      color="primary"
                      target="_blank"
                      href="https://www.linkedin.com/in/thiago-yasunaka-389a69155/"
                    >
                      <FaLinkedin size={width === 'xs' ? 24 : 32} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip arrow title="Github">
                    <IconButton
                      color="primary"
                      target="_blank"
                      href="https://github.com/thiagoissao"
                    >
                      <FaGithub size={width === 'xs' ? 24 : 32} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip arrow title="Medium">
                    <IconButton
                      color="primary"
                      target="_blank"
                      href="https://medium.com/@thiagoyasunaka"
                    >
                      <FaMedium size={width === 'xs' ? 24 : 32} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};
export default Banner;
