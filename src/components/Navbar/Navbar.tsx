import { useNavigate } from "react-router-dom";
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { AttachFile, Home, Info } from "@mui/icons-material";
import { MenuSocialMedias } from "../MenuSocialMedias/MenuSocialMedias";

type RouteObject = {
  id: string;
  text: string;
  to: string;
  icon: React.ReactNode
}

export function Navbar() {
  const navigate = useNavigate();

  const paths: RouteObject[] = [
    {
      id: crypto.randomUUID(),
      text: "Home",
      icon: <Home color="secondary" />,
      to: "/",
    },
    {
      id: crypto.randomUUID(),
      text: "Resume",
      icon: <AttachFile color="secondary" />,
      to: "/resume",
    },
    {
      id: crypto.randomUUID(),
      text: "About",
      icon: <Info color="secondary" />,
      to: "/about",
    },
  ]
  const theme = useTheme();
  return (
    <Box sx={{ height: "100%" }} bgcolor={theme.palette.background.paper} py={2}>
      <Grid container direction="column" height="100%">
        <Grid item xs={2} textAlign="center">
          <Grid container direction="column" height="100%">
            <Grid item xs={6}>x</Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color={theme.palette.primary.main}>
                Guilherme Gonçalves
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <List>
            {paths.map(({ text, to, icon, id }) => (
              <ListItem key={id} disablePadding onClick={() => navigate(to)}>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: `${theme.palette.primary.main}` }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={1}>
          <MenuSocialMedias />
        </Grid>
      </Grid>
    </Box>
  )
}