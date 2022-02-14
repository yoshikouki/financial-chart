// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCanvas, Image } from "canvas";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";
import ReactDOMServer from "react-dom/server";
import OgpImageChart from "../../../components/OgpImageChart";

type Data = {
  [key: string]: string;
};
const sampleData = [
  {
    date: "2021-1-31",
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const [imageWidth, imageHeight] = [1200, 630];
  const [chartWidth, chartHeight] = [imageWidth * 0.9, imageHeight * 0.8];
  const data = sampleData;

  const chartHTMLString = ReactDOMServer.renderToStaticMarkup(
    OgpImageChart({ data, width: imageWidth, height: imageHeight })
  );
  const chartSVG = parse(chartHTMLString).querySelector("svg");
  if (!chartSVG)
    return res.status(500).json({ error: "error of rendering chart" });
  chartSVG.setAttributes({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
  });
  const img = new Image();
  img.src = `data:image/svg+xml,<?xml version="1.0"?>${chartSVG.toString()}`;

  const canvas = createCanvas(imageWidth, imageHeight);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    img,
    (imageWidth - chartWidth) / 4,
    (imageHeight - chartHeight) / 2,
    chartWidth,
    chartHeight
  );

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}
