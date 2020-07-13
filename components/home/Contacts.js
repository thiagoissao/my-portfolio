import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Title from '../Title'
import { Field, Form } from 'react-final-form'
import TextField from '../pure/TextField'
import Button from '../pure/Button'
import Paper from '@material-ui/core/Paper'
import * as yup from 'yup'
import * as api from '../../services/api'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(banner3.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    '&.MuiPaper-root': {
      borderRadius: theme.spacing(2)
    }
  }
}))

const initialValues = {
  name: 'Thiago Yasunaka',
  email: 'thiagoyasunaka@hotmail.com',
  message: 'testando email'
}

const Contacts = () => {
  const classes = useStyles()

  const handleSubmit = async values => {
    const response = await api.sendEmail(values)
    console.log(response)
  }

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).required()
  })

  const validate = async values => {
    const validation = await schema.validate(values, { abortEarly: false }).catch(err => err)
    if (validation.errors) {
      const errorsFormatted = validation.inner.reduce((accumulator, error) =>
        ({ ...accumulator, [error.path]: error.message }), {})
      return errorsFormatted
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <div
          style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.1)) 90%',
            position: 'absolute',
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ zIndex: 2 }}>
        <Box my={5}>
          <Container maxWidth='md'>
            <Form onSubmit={handleSubmit} validate={validate} initialValues={initialValues}>
              {({ handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Paper
                      elevation={6}
                      className={classes.paper}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Title color='primary' title='Contact me' />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Field name='name'>
                                {({ input, meta, ...props }) =>
                                  <TextField
                                    {...props}
                                    {...input}
                                    error={meta.touched && !!meta.error}
                                    helperText={meta.touched && meta.error}
                                    fullWidth
                                    label='Your first and last name'
                                    variant='outlined'
                                  />
                                }
                              </Field>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field name='email'>
                                {({ input, meta, ...props }) =>
                                  <TextField
                                    {...props}
                                    {...input}
                                    error={meta.touched && !!meta.error}
                                    helperText={meta.touched && meta.error}
                                    fullWidth
                                    label='Your email'
                                    variant='outlined'
                                  />
                                }
                              </Field>
                            </Grid>
                            <Grid item xs={12}>
                              <Field name='message'>
                                {({ input, meta, ...props }) =>
                                  <TextField
                                    {...props}
                                    {...input}
                                    error={meta.touched && !!meta.error}
                                    helperText={meta.touched && meta.error}
                                    fullWidth
                                    multiline
                                    rows={6}
                                    label='Type here your message'
                                    variant='outlined'
                                  />
                                }
                              </Field>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justify='center'>
                                <Grid item xs sm={7}>
                                  <Button
                                    type='submit'
                                    color='primary'
                                    fullWidth
                                    variant='contained'>
                                    Send message
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </form>
                )
              }}
            </Form>
          </Container>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Contacts