// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCanvas, Image } from "canvas";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";
import ReactDOMServer from "react-dom/server";
import OgpImageChart from "../../../components/charts/OgpImageChart";
import { fmp } from "../../../lib/financial-modeling-prep";

type Data = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const symbol = "AAPL";
  const [imageWidth, imageHeight] = [1200, 630];
  const data = (await fmp.incomeStatement(symbol, { limit: 5 })).reverse();

  const chartHTMLString = ReactDOMServer.renderToStaticMarkup(
    OgpImageChart({ symbol, data, width: imageWidth, height: imageHeight })
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
  ctx.drawImage(img, 0, 0);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}
