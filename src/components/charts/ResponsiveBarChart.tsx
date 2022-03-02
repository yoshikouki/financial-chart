import { Skeleton } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import RoundedBarChart from "./RoundedBarChart";

interface Props {
  data: any[];
  yDataKey: string;
  xDataKey: string;
  isLoaded?: boolean;
  height?: number;
}

export const ResponsiveBarChart = ({
  data,
  yDataKey,
  xDataKey,
  isLoaded = true,
  height = 300,
}: Props) => {
  return isLoaded ? (
    <ResponsiveContainer width={"100%"} height={height}>
      {/* Recharts は関連コンポーネントを別コンポーネントに切り出すことができない。関数呼び出しでは動作するのでワークアラウンド */}
      {RoundedBarChart({
        data: data,
        yDataKey: yDataKey,
        xDataKey: xDataKey,
        height: height,
      })}
    </ResponsiveContainer>
  ) : (
    <Skeleton variant="rectangular" animation="wave" sx={{ height: height }} />
  );
};
