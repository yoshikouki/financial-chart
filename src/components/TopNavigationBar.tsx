import { AppBar, Toolbar, Typography } from "@mui/material";
import { DefaultLayoutProps } from "./layouts/default";

const TopNavigationBar = (props: DefaultLayoutProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {props.title || "Financial Chart"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigationBar;
