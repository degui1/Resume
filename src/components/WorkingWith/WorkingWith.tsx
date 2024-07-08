import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'

import { Card } from './Components/Card/Card'

export function WorkingWith() {
  const theme = useTheme()

  return (
    <Grid container height="50vh" justifyContent="center">
      <Grid item xs={12} sm={6} padding="5rem">
        <Stack spacing={2} justifyContent="center" height="100%">
          <Box>
            <Typography variant="h3" color="primary" fontWeight="bold">
              Technologies I work with
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color={theme.palette.text.secondary}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={12} sm={6}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
