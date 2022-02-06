import { get } from "./fetcher";

export type incomeStatementResponse = {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  revenue: string;
  costOfRevenue: string;
  grossProfit: string;
  grossProfitRatio: string;
  researchAndDevelopmentExpenses: string;
  generalAndAdministrativeExpenses: string;
  sellingAndMarketingExpenses: string;
  sellingGeneralAndAdministrativeExpenses: string;
  otherExpenses: string;
  operatingExpenses: string;
  costAndExpenses: string;
  interestIncome: string;
  interestExpense: string;
  depreciationAndAmortization: string;
  ebitda: string;
  ebitdaratio: string;
  operatingIncome: string;
  operatingIncomeRatio: string;
  totalOtherIncomeExpensesNet: string;
  incomeBeforeTax: string;
  incomeBeforeTaxRatio: string;
  incomeTaxExpense: string;
  netIncome: string;
  netIncomeRatio: string;
  eps: string;
  epsdiluted: string;
  weightedAverageShsOut: string;
  weightedAverageShsOutDil: string;
  link: string;
  finalLink: string;
}[];

export const incomeStatement = async (
  symbol: string,
  period: "annual" | "quarter" = "annual",
  limit: number | null = null
): Promise<incomeStatementResponse> => {
  return await get(`api/v3/income-statement/${symbol}`, { period, limit });
};
