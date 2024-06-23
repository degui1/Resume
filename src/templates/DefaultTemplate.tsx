import { Grid, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";



export function DefaultTemplate() {
  const theme = useTheme();
  return (
    <Grid container height="100vh" bgcolor={theme.palette.background.default}>
      <Grid item xs={3} xl={2}>
        <Navbar />
      </Grid>
      <Grid item xs={9} xl={10}>
        <Outlet />
      </Grid>
    </Grid>
  )
}