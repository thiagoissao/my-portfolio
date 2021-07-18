import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

const ExperienceCard = ({ title, description, urlIcon }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item>
            <Image
              width={80}
              height={80}
              src={urlIcon}
              alt='Thiago Experience'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item>
            <Typography color='primary' variant='h6' align='center'>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid item>
            <Typography color='primary' align='center'>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default ExperienceCard
