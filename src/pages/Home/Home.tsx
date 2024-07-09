import { Grid, Avatar, Typography, useTheme } from '@mui/material'
import { South } from '@mui/icons-material'

import { AnimatedBox } from '../../components/AnimatedBox/AnimatedBox'
import { InfoCard } from '../../components/InfoCard/InforCard'

import ladyJustice from '../../assets/Lady_Justice.webp'
import { GetInTouch } from '../../components/GetInTouch/GetInTouch'
import { ImagesList } from '../../components/ImagesList/ImagesList'

export function Home() {
  const theme = useTheme()

  return (
    <Grid container gap={10}>
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          minHeight="90vh"
          justifyContent="space-around"
          alignItems="center"
          paddingTop={3}
        >
          <Grid item>
            <Avatar
              // src="https://github.com/degui1.png"
              src={ladyJustice}
              alt="profile image"
              sx={{
                width: '180px',
                height: '180px',
                boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              color="primary"
              fontWeight="bold"
              textAlign="center"
              lineHeight="150%"
            >
              I&apos;m a web developer
              <Typography variant="inherit" color="secondary">
                based in Brazil,
              </Typography>
              specializing in
              <Typography variant="inherit" color="secondary">
                AWS.
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary" variant="subtitle1">
              Scroll down
            </Typography>
            <AnimatedBox boxProps={{ marginTop: '1rem' }}>
              <South
                color="secondary"
                sx={{
                  fontSize: '3.5rem',
                }}
              />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Technologies I work with"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse varius enim in eros elementum
          tristique. dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImagesList />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Technologies I am learning"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur a."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImagesList />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Get in touch"
              content="Drop me a line, give me a call, or send me a message by submitting the form."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GetInTouch />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
