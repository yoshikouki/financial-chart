import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(5)} ${theme.spacing(2)}`,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5),
  },
}));

const ChartCard = (props: Props) => {
  return (
    <StyledPaper elevation={4} sx={{ borderRadius: 5 }}>
      {props.children}
    </StyledPaper>
  );
};

export default ChartCard;
