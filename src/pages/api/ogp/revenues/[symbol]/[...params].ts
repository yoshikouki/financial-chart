// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCanvas, Image } from "canvas";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";
import ReactDOMServer from "react-dom/server";
import OgpImageChart from "../../../../../components/charts/OgpImageChart";
import { fmp } from "../../../../../lib/financial-modeling-prep";

type Data = {
  [key: string]: string;
};

const renderImageBufferFromChart = (
  rechartElement: JSX.Element,
  imageWidth: number = 1200,
  imageHeight: number = 630
) => {
  const chartHTMLString = ReactDOMServer.renderToStaticMarkup(rechartElement);
  const chartSVG = parse(chartHTMLString).querySelector("svg");
  if (!chartSVG) throw new Error("Parse SVG errors.");
  chartSVG.setAttributes({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
  });

  const canvas = createCanvas(imageWidth, imageHeight);
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = `data:image/svg+xml,<?xml version="1.0"?>${chartSVG.toString()}`;
  ctx.drawImage(img, 0, 0);
  return canvas.toBuffer();
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const [imageWidth, imageHeight] = [1200, 630];
  const dataNumber = 8;

  const { symbol, params } = req.query;
  if (typeof symbol !== "string")
    return res.status(400).json({ error: "Request errors." });
  const data = (
    await fmp.incomeStatement(symbol, { period: "quarter", limit: dataNumber })
  ).reverse();

  const rechartElement = OgpImageChart({
    symbol,
    data,
    width: imageWidth,
    height: imageHeight,
    dataNumber: dataNumber,
  });
  const buffer = renderImageBufferFromChart(
    rechartElement,
    imageWidth,
    imageHeight
  );

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default handler;
