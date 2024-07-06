import { South } from "@mui/icons-material";
import { Avatar, Grid, Typography, useTheme } from "@mui/material";

import ladyJustice from "../../assets/Lady_Justice.webp";
import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";

export function Home() {
  const theme = useTheme();

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container
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
                width: "180px",
                height: "180px",
                boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center" lineHeight="150%">
              I'm a web developer
              <Typography variant="inherit" color="secondary">based in Brazil,</Typography>
              specializing in
              <Typography variant="inherit" color="secondary">AWS.</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary" variant="subtitle1">
              Scroll down
            </Typography>
            <AnimatedBox>
              <South
                color="secondary"
                sx={{
                  fontSize: "3.5rem",
                }}
              />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}