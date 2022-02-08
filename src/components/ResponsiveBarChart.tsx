import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ResponsiveBarChart = ({ data }) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"100%"}
      minWidth={300}
      minHeight={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#8884d8" isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};
