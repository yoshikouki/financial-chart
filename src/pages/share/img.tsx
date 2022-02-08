import { useState } from "react";
import { ResponsiveBarChart } from "../../components/ResponsiveBarChart";

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
  const [image, setImage] = useState<HTMLCanvasElement | null>(null);
  const chart = <ResponsiveBarChart data={data} />;
  import("html2canvas")
    .then((html2canvas) => {
      html2canvas
        .default(document.body, { removeContainer: true, height: 300 })
        .then((canvas) => document.body.appendChild(canvas));
    })
    .catch((e) => {
      throw e;
    });
  return (
    <>
      <ResponsiveBarChart data={data} />
      {image}
    </>
  );
};

export default Img;
