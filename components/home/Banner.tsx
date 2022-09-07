import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import useWidth from '../../hooks/useWidth';
import {
  Grid,
  Hidden,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

const meSx: React.CSSProperties = {
  borderRadius: 16,
};

const Banner = () => {
  const width = useWidth();

  return (
    <Grid container alignItems="center" spacing={2}>
      <Hidden only="xs">
        <Grid item>
          <Image
            alt="Thiago Yasunaka Profile"
            width={172}
            height={172}
            objectFit="cover"
            src="/me.jpeg"
            style={meSx}
          />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <Image
                alt="Thiago Yasunaka Mobile Profile"
                width={172}
                height={172}
                objectFit="cover"
                src="/me.jpeg"
                style={meSx}
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
              color="textPrimary"
              align={width === 'xs' ? 'center' : 'left'}
            >
              Thiago Yasunaka
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
              align={width === 'xs' ? 'center' : 'left'}
            >
              Brazilian 🇧🇷
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
              align={width === 'xs' ? 'center' : 'left'}
            >
              Computer Scientist & Software Engineer
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Stack
              justifyContent={width === 'xs' ? 'center' : 'flex-start'}
              flexDirection="row"
            >
              <Tooltip arrow title="Linkedin">
                <IconButton
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/thiago-yasunaka-389a69155/"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Github">
                <IconButton
                  color="primary"
                  target="_blank"
                  href="https://github.com/thiagoissao"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Banner;
