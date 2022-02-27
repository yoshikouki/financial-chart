import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { SyntheticEvent, useState } from "react";

const BottomNavigationBar = () => {
  const [value, setValue] = useState("Home");
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Companies"
          value="Companies"
          icon={<BusinessIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
