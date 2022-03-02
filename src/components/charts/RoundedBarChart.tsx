import chroma from "chroma-js";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import {
  formatToShortMonthlyDate,
  formatToShortNumber,
} from "../../lib/format";

interface RoundedBarChartProps {
  data: any[];
  yDataKey: string;
  xDataKey: string;
  height: number;
}

const RoundedBarChart = ({
  data,
  yDataKey,
  xDataKey,
  height,
}: RoundedBarChartProps) => {
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
        dataKey={xDataKey}
        tickFormatter={(value) => formatToShortMonthlyDate(value)}
        axisLine={false}
        dy={10}
        tickSize={0}
        fontSize={fontSize}
        fontWeight="bold"
        stroke={fontColor}
      />
      <YAxis hide />
      <Bar dataKey={yDataKey} fill="#8884d8">
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
          dataKey={yDataKey}
          formatter={(value: number) => formatToShortNumber(value)}
          position="insideTop"
          dy={fontSize}
          fill="white"
          fontSize={fontSize}
          fontWeight="bold"
        />
      </Bar>
    </BarChart>
  );
};

export default RoundedBarChart;
