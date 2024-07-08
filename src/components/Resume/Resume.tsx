import { Avatar, Grid, Typography, useTheme } from '@mui/material'
import { South } from '@mui/icons-material'

import ladyJustice from '../../assets/Lady_Justice.webp'
import { AnimatedBox } from '../AnimatedBox/AnimatedBox'

export function Resume() {
  const theme = useTheme()

  return (
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
  )
}
