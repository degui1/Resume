import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function DefaultTemplate() {
  return (
    <Box
      minHeight="100vh"
      bgcolor="background.default"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{}}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          maxWidth: '1920px',
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">DevGG</Typography>
            </Grid>
            <Grid item>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <Button>Certificates</Button>
                </Grid>
                <Grid item>
                  <Button>Working with</Button>
                </Grid>
                <Grid item>
                  <Button>Learning</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Get in touch
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container maxWidth="1920px" justifyContent="center" py={5}>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  )
}
