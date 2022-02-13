import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

interface Props {
  data: any[];
  width: number;
  height: number;
}

function OgpImageChart({ data, width, height }: Props) {
  return (
    <BarChart width={width} height={height} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="revenue" fill="#8884d8" isAnimationActive={false} />
    </BarChart>
  );
}

export default OgpImageChart;
