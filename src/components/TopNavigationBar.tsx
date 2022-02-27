import { AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import { DefaultLayoutProps } from "./layouts/default";

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const TopNavigationBar = (props: DefaultLayoutProps) => {
  return (
    <ElevationScroll {...props}>
      <AppBar>
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
    </ElevationScroll>
  );
};

export default TopNavigationBar;
