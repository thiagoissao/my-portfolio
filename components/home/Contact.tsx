import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../pure/TextField';
import Button from '../pure/Button';
import Title from '../Title';
import * as api from '../../services/api';
import Snackbar from '../pure/Snackbar';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const SUCCESS_CONFIG = {
  open: false,
  severity: 'success',
  message: 'Message sent successfully!',
};

const ERROR_CONFIG = {
  open: false,
  severity: 'error',
  message: 'Error, try again',
};

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: theme.spacing(3),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [sendingEmail, setSendingEmail] = useState(false);
  const [snackbarConfig, setSnackbarConfig] = useState(SUCCESS_CONFIG);

  const handleCloseSnackbar = () => {
    setSnackbarConfig({ ...snackbarConfig, open: false });
  };

  const handleSubmit = async values => {
    setSendingEmail(true);
    const response = await api.sendEmail(values);
    setSendingEmail(false);
    if (response.ok) {
      return setSnackbarConfig({ ...SUCCESS_CONFIG, open: true });
    }
    setSnackbarConfig({ ...ERROR_CONFIG, open: true });
  };

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).required(),
  });

  const validate = async values => {
    const validation = await schema
      .validate(values, { abortEarly: false })
      .catch(err => err);
    if (validation.errors) {
      const errorsFormatted = validation.inner.reduce(
        (accumulator, error) => ({
          ...accumulator,
          [error.path]: error.message,
        }),
        {}
      );
      return errorsFormatted;
    }
  };

  return (
    <>
      <Snackbar
        onClose={handleCloseSnackbar}
        open={snackbarConfig.open}
        message={snackbarConfig.message}
        severity={snackbarConfig.severity}
      />
      <Box padding={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Title title="Contact me" />
          </Grid>
          <Grid item xs={12}>
            <Grid
              spacing={1}
              container
              wrap="nowrap"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="primary">
                  You can contact me by filling out the form below.
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <Image
                    alt="Send Email to Thiago"
                    height={77}
                    width={210}
                    src="/send-email.png"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Form onSubmit={handleSubmit} validate={validate}>
              {({ handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field name="name">
                          {({ input, meta, ...props }) => (
                            <TextField
                              {...props}
                              {...input}
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                              fullWidth
                              label="Your first and last name"
                              variant="outlined"
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="email">
                          {({ input, meta, ...props }) => (
                            <TextField
                              {...props}
                              {...input}
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                              fullWidth
                              label="Your email"
                              variant="outlined"
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Field name="message">
                          {({ input, meta, ...props }) => (
                            <TextField
                              {...props}
                              {...input}
                              error={meta.touched && !!meta.error}
                              helperText={meta.touched && meta.error}
                              fullWidth
                              multiline
                              rows={6}
                              label="Type message"
                              variant="outlined"
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={1}>
                          <Grid item xs={12} sm={7}>
                            <Button
                              type="submit"
                              color="primary"
                              fullWidth
                              disabled={sendingEmail}
                              variant="contained"
                              className={classes.button}
                            >
                              Send message
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Grow in={sendingEmail}>
                              <Grid container justify="center">
                                <Grid item>
                                  <CircularProgress />
                                </Grid>
                              </Grid>
                            </Grow>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                );
              }}
            </Form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
