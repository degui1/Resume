import {
  CopyrightOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Menu as MenuIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Outlet } from 'react-router-dom'

import Logo from '../../public/Logo1.svg'
import { useState } from 'react'

export function DefaultTemplate() {
  const theme = useTheme()
  const isMobileOrSmallDevice = useMediaQuery(
    theme.breakpoints.between('xs', 'sm'),
  )

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

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
            {isMobileOrSmallDevice ? (
              <>
                <IconButton
                  id="menu-button"
                  aria-controls={openMenu ? 'nav-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={(event) => {
                    setAnchorEl(event.currentTarget)
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="nav-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={() => {
                    setAnchorEl(null)
                  }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem>Certificates</MenuItem>
                  <MenuItem>Working with</MenuItem>
                  <MenuItem>Learning</MenuItem>
                </Menu>
              </>
            ) : (
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
            )}
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container maxWidth="xl" justifyContent="center">
        <Grid item xs={11}>
          <Outlet />
        </Grid>
      </Grid>

      <Grid
        container
        maxWidth="xl"
        component="footer"
        mt={10}
        justifyContent="center"
      >
        <Grid item xs={11}>
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
        <Grid item xs={11}>
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
