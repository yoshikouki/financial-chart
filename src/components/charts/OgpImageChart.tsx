import chroma from "chroma-js";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
  width: number;
  height: number;
}

const shortNumberFormat = (value: number): string => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(value);
};

const shortMonthlyDateFormat = (value: string): string => {
  const date = new Date(value);
  const yearString = date.getFullYear();
  const monthString = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${yearString}-${monthString}`;
};

function OgpImageChart({ data, width, height }: Props) {
  const fontSize = 30;
  const fontFamily = "sans-serif";
  const fontColor = "#444F5A";
  const baseColor = chroma.random();
  const colors = chroma
    .scale([baseColor, baseColor.darken()])
    .mode("lab")
    .correctLightness()
    .colors(5);

  return (
    <BarChart
      data={data}
      width={width}
      height={height}
      margin={{
        top: height * 0.05,
        bottom: height * 0.05,
        left: width * 0.05,
        right: width * 0.05,
      }}
      barCategoryGap={0}
    >
      <text
        x={width / 2}
        y={fontSize}
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily={fontFamily}
          fill={fontColor}
        >
          売上高
        </tspan>
      </text>
      <XAxis
        dataKey="date"
        tickFormatter={(value) => shortMonthlyDateFormat(value)}
        axisLine={false}
        dy={10}
        tickSize={0}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily={fontFamily}
        stroke={fontColor}
      />
      <YAxis hide />
      <Bar dataKey="revenue" fill="#8884d8" radius={30}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
        <LabelList
          dataKey="revenue"
          formatter={(value) => shortNumberFormat(value)}
          position="insideTop"
          dy={10}
          fill="white"
          fontSize={fontSize * 1.3}
          fontWeight="bold"
          fontFamily={fontFamily}
        />
      </Bar>
      <Tooltip />
    </BarChart>
  );
}

export default OgpImageChart;
