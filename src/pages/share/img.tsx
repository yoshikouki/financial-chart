import { useRef } from "react";
import { ResponsiveBarChart } from "../../components/charts/ResponsiveBarChart";

const data = [
  {
    date: "2021-12-31",
    revenue: 168864000000,
    netIncome: 20081000000,
  },
  {
    date: "2020-12-31",
    revenue: 171760000000,
    netIncome: -5176000000,
  },
  {
    date: "2019-12-31",
    revenue: 181193000000,
    netIncome: 13903000000,
  },
  {
    date: "2018-12-31",
    revenue: 170756000000,
    netIncome: 19370000000,
  },
  {
    date: "2017-12-31",
    revenue: 160546000000,
    netIncome: 29450000000,
  },
];

const Img = () => {
  const chartRef = useRef<HTMLDivElement>(null!);

  import("html2canvas")
    .then((html2canvas) => {
      const chart = chartRef.current;
      html2canvas
        .default(chart, {
          removeContainer: true,
          width: 600,
          height: 300,
          backgroundColor: "#aaa",
        })
        .then((canvas) => {
          chart.replaceChildren(canvas);
        });
    })
    .catch((e) => {
      throw e;
    });
  return (
    <>
      <div ref={chartRef}>
        <ResponsiveBarChart data={data} />
      </div>
    </>
  );
};

export default Img;
