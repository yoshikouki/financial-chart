import chroma from "chroma-js";
import { BarChart, XAxis, YAxis, Bar, Cell, LabelList } from "recharts";
import {
  formatToShortMonthlyDate,
  formatToShortNumber,
} from "../../utils/format";

export interface OgpImageChartProps {
  symbol: string;
  data: any[];
  width: number;
  height: number;
  dataNumber: number;
}

const OgpImageChart = ({
  symbol,
  data,
  width,
  height,
  dataNumber,
}: OgpImageChartProps) => {
  const marginTop = height * 0.05;
  const marginBottom = height * 0.05;
  const marginLeft = width * 0.1;
  const marginRight = width * 0.1;
  const fontSize = 30;
  const radiusRounded = fontSize * 0.8;
  const fontFamily = "sans-serif";
  const fontColor = "#444F5A";
  const baseColor = chroma.random();
  const colors = chroma
    .scale([baseColor, baseColor.darken()])
    .mode("lab")
    .correctLightness()
    .colors(dataNumber);

  return (
    <BarChart
      data={data}
      width={width}
      height={height * 0.99}
      margin={{
        top: marginTop,
        bottom: marginBottom,
        left: marginLeft,
        right: marginRight,
      }}
      barCategoryGap={1}
    >
      <XAxis
        dataKey="date"
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
      <Bar dataKey="revenue" fill="#8884d8">
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
          dataKey="revenue"
          formatter={(value: number) => formatToShortNumber(value)}
          position="insideTop"
          dy={fontSize}
          fill="white"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily={fontFamily}
        />
      </Bar>
      <text x={marginLeft} y={marginTop + fontSize} textAnchor="start">
        <tspan
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily={fontFamily}
          fill={fontColor}
        >
          売上高 {symbol}
        </tspan>
      </text>
    </BarChart>
  );
};

export default OgpImageChart;
