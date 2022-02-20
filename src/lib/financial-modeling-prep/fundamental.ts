import { get } from "./fetcher";

export type FmpIncomeStatementResponse = {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  revenue: number; // 売上高
  costOfRevenue: number;
  grossProfit: number; // 売上総利益・粗利益
  grossProfitRatio: number; // 売上総利益・粗利益比率
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  sellingAndMarketingExpenses: number;
  sellingGeneralAndAdministrativeExpenses: number;
  otherExpenses: number;
  operatingExpenses: number;
  costAndExpenses: number;
  interestIncome: number;
  interestExpense: number;
  depreciationAndAmortization: number;
  ebitda: number;
  ebitdaratio: number;
  operatingIncome: number; // 営業利益
  operatingIncomeRatio: number; // 営業利益比比率
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number; // 税引前当期純利益
  incomeBeforeTaxRatio: number; // 税引前当期純利益比率
  incomeTaxExpense: number;
  netIncome: number; // 当期純利益
  netIncomeRatio: number; // 当期純利益比率
  eps: number;
  epsdiluted: number;
  weightedAverageShsOut: number;
  weightedAverageShsOutDil: number;
  link: string;
  finalLink: string;
}[];

export const incomeStatement = async (
  symbol: string,
  params: {
    period?: "annual" | "quarter";
    limit?: number | null;
  }
): Promise<FmpIncomeStatementResponse> => {
  return await get(`api/v3/income-statement/${symbol}`, params);
};
