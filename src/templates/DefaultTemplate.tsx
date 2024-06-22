import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";



export function DefaultTemplate() {
  return (
    <Grid container height="100vh">
      <Grid item md={2}>
        <Navbar />
      </Grid>
      <Grid item md={10}>
        <Outlet />
      </Grid>
    </Grid>
  )
}