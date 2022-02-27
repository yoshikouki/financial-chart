import { Skeleton } from "@mui/material";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
  dataKey: string;
  isLoaded?: boolean;
  height?: number;
}

export const ResponsiveBarChart = ({
  data,
  dataKey,
  isLoaded = true,
  height = 300,
}: Props) => {
  return isLoaded ? (
    <ResponsiveContainer width={"100%"} height={height}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#8884d8" isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <Skeleton variant="rectangular" animation="wave" sx={{ height: height }} />
  );
};
