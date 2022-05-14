import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    [theme.breakpoints.only('xs')]: {
      fontSize: 30,
    },
  },
  styleSub: {
    width: '60%',
    height: theme.spacing(1 / 3),
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
}));

type TitleProps = {
  title: string;
  isSubtitle?: boolean;
};

const Title = ({ title, isSubtitle }: TitleProps) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography color="primary" variant={isSubtitle ? 'h4' : 'h3'}>
          <b>{title}</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.styleSub} />
      </Grid>
    </Grid>
  );
};

Title.defaultProps = {
  isSubtitle: false,
};
export default Title;
