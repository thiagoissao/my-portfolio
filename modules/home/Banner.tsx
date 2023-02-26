import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Hidden, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import useWidth from '../../hooks/useWidth';

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
            src="/me.jpeg"
            priority
          />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <Image
                priority
                alt="Thiago Yasunaka Mobile Profile"
                width={172}
                height={172}
                src="/me.jpeg"
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
              <IconButton
                color="primary"
                target="_blank"
                href="https://www.linkedin.com/in/thiago-yasunaka-389a69155/"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                target="_blank"
                href="https://github.com/thiagoissao"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Banner;
