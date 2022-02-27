import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ResponsiveBarChart } from "../../components/charts/ResponsiveBarChart";
import { OgpHead } from "../../components/head/OgpHead";
import { DefaultLayout } from "../../components/layouts/default";
import { useIncomeStatements } from "../../hooks/api/income-statements";
import { FmpIncomeStatementResponse } from "../../lib/financial-modeling-prep/fundamental";

interface Props {
  data: FmpIncomeStatementResponse;
}

const CompanyPage = ({ data }: Props) => {
  const router = useRouter();
  const symbol =
    typeof router.query.symbol === "string"
      ? router.query.symbol.toUpperCase()
      : "AAPL";
  const { incomeStatementData, isLoaded } = useIncomeStatements(symbol);

  const today = new Date();
  const monthString = (today.getMonth() + 1).toString().padStart(2, "0");
  const dateString = today.getDate().toString().padStart(2, "0");
  const todayString = `${today.getFullYear()}${monthString}${dateString}`;
  const ogpImagePath = `/api/ogp/revenues/${symbol}/${todayString}`;

  return (
    <DefaultLayout title={symbol}>
      <OgpHead imagePath={ogpImagePath} />

      <h2>売上高</h2>
      <ResponsiveBarChart
        YDataKey="revenue"
        XDataKey="date"
        data={incomeStatementData}
        isLoaded={isLoaded}
      />

      <h2>EPS</h2>
      <ResponsiveBarChart
        YDataKey="eps"
        XDataKey="date"
        data={incomeStatementData}
        isLoaded={isLoaded}
      />

      <h2>営業利益</h2>
      <ResponsiveBarChart
        YDataKey="operatingIncome"
        XDataKey="date"
        data={incomeStatementData}
        isLoaded={isLoaded}
      />

      <h2>純利益</h2>
      <ResponsiveBarChart
        YDataKey="netIncome"
        XDataKey="date"
        data={incomeStatementData}
        isLoaded={isLoaded}
      />
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default CompanyPage;
