import { useNavigate } from "react-router-dom";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { Home } from "@mui/icons-material";
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
      icon: <Home />,
      to: "/",
    },
  ]
  return (
    <Paper elevation={1} sx={{ maxWidth: "100%", height: "100%" }}>
      <Grid container direction="column" height="100%">
        <Grid item xs={2}>
          test
        </Grid>
        <Grid item xs={9}>
          <List>
            {paths.map(({ text, to, icon, id }) => (
              <ListItem key={id} disablePadding onClick={() => navigate(to)}>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={1}>
          <MenuSocialMedias />
        </Grid>
      </Grid>
    </Paper>
  )
}