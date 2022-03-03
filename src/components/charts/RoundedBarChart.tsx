import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { randomScaleColor } from "../../utils/color";
import {
  formatToShortMonthlyDate,
  formatToShortNumber,
} from "../../utils/format";
import { theme } from "../MuiTheme";

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
  const radiusRounded = 16;
  const colors = randomScaleColor(data.length);

  return (
    <BarChart
      data={data}
      height={height - theme.typography.fontSize}
      barCategoryGap={1}
    >
      <XAxis
        dataKey={xDataKey}
        tickFormatter={(value) => formatToShortMonthlyDate(value)}
        axisLine={false}
        dy={theme.typography.fontSize}
        tickSize={0}
        fontWeight="bold"
      />
      <YAxis hide />
      <Tooltip />
      <Bar dataKey={yDataKey} dy={30}>
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            radius={
              calcRadius(
                radiusRounded,
                index,
                data.length - 1
              ) as unknown as string
            }
          />
        ))}
        <LabelList
          dataKey={yDataKey}
          formatter={(value: number) => formatToShortNumber(value)}
          alignmentBaseline="hanging"
          position="top"
          fill="gray"
          fontWeight="bold"
        />
      </Bar>
    </BarChart>
  );
};

export const calcRadius = (
  radiusRounded: number,
  index: number,
  maxIndex: number
) => {
  switch (index) {
    case 0:
      return [radiusRounded, radiusRounded, 0, radiusRounded];
      break;
    case maxIndex:
      return [radiusRounded, radiusRounded, radiusRounded, 0];
      break;
    default:
      return [radiusRounded, radiusRounded, 0, 0];
      break;
  }
};

export default RoundedBarChart;
