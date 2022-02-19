import { NextApiRequest, NextApiResponse } from "next";
import { fmp } from "../../../lib/financial-modeling-prep";
import { FmpIncomeStatementResponse } from "../../../lib/financial-modeling-prep/fundamental";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type Data = FmpIncomeStatementResponse | { error: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { symbol, limit } = req.query;
  if (typeof symbol !== "string")
    return res.status(400).json({ error: "Request errors." });
  const dataNumber = typeof limit === "string" ? Number(limit) : 8;

  const data = (
    await fmp.incomeStatement(symbol, { period: "quarter", limit: dataNumber })
  ).reverse();

  res.status(200).json(data);
};

export default handler;
