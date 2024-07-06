import { AppBar, Button, Grid, Toolbar, Typography} from "@mui/material";
import { Outlet } from "react-router-dom";

export function DefaultTemplate() {
  
  return (
    <Grid 
      container
      minHeight="100vh"
      bgcolor="background.default"
      direction="column"
    >
      <Grid item xs={8}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
          }}
        >
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">
                  DevGG
                </Typography>
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
                    <Button variant="contained" color="secondary">Get in touch</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  )
}