import chroma from "chroma-js";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import {
  formatToShortMonthlyDate,
  formatToShortNumber,
} from "../../lib/format";

interface RoundedBarChartProps {
  data: any[];
  YDataKey: string;
  XDataKey: string;
  height: number;
}

const RoundedBarChart = ({
  data,
  XDataKey,
  YDataKey,
  height,
}: RoundedBarChartProps) => {
  const fontFamily = "Roboto";
  const fontSize = 30;
  const radiusRounded = fontSize * 0.8;
  const fontColor = "#444F5A";
  const baseColor = chroma.random();
  const colors = chroma
    .scale([baseColor, baseColor.darken()])
    .mode("lab")
    .correctLightness()
    .colors(data.length);

  return (
    <BarChart data={data} height={height} barCategoryGap={1}>
      <XAxis
        dataKey={XDataKey}
        tickFormatter={(value) => formatToShortMonthlyDate(value)}
        axisLine={false}
        dy={10}
        tickSize={0}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily={fontFamily}
        stroke={fontColor}
      />
      <YAxis hide />
      <Bar dataKey={YDataKey} fill="#8884d8">
        {data.map((entry, index) => {
          let radius: number[];
          switch (index) {
            case 0:
              radius = [radiusRounded, radiusRounded, 0, radiusRounded];
              break;
            case data.length - 1:
              radius = [radiusRounded, radiusRounded, radiusRounded, 0];
              break;
            default:
              radius = [radiusRounded, radiusRounded, 0, 0];
              break;
          }
          return (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              radius={radius as unknown as string}
            />
          );
        })}
        <LabelList
          dataKey={YDataKey}
          formatter={(value: number) => formatToShortNumber(value)}
          position="insideTop"
          dy={fontSize}
          fill="white"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily={fontFamily}
        />
      </Bar>
    </BarChart>
  );
};

export default RoundedBarChart;
