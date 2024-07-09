import {
  CopyrightOutlined,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Outlet } from 'react-router-dom'

import Logo from '../../public/Logo1.svg'

export function DefaultTemplate() {
  return (
    <Box
      minHeight="100vh"
      bgcolor="background.default"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          maxWidth: 'xl',
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <img src={Logo} alt="Logo" />
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

      <Grid container maxWidth="xl" justifyContent="center">
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>

      <Grid container maxWidth="xl" component="footer" mt={10}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <img src={Logo} alt="Logo" />
            <Box display="flex" justifyContent="flex-end">
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
          <Divider color="#fff" />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" pt={2}>
            <Typography display="flex" gap="1rem" color="primary">
              <CopyrightOutlined /> 2024, Guilherme Gonçalves. All rights
              reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
