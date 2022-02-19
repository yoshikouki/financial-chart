import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ResponsiveBarChart } from "../../components/charts/ResponsiveBarChart";
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

  return (
    <DefaultLayout>
      <h1>{symbol}</h1>
      <h2>売上高</h2>
      {isLoaded ? <ResponsiveBarChart data={incomeStatementData} /> : "Loading"}
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default CompanyPage;
