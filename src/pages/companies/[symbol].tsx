import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ResponsiveBarChart } from "../../components/charts/ResponsiveBarChart";
import { DefaultLayout } from "../../components/layouts/default";
import { FmpIncomeStatementResponse } from "../../lib/financial-modeling-prep/fundamental";

interface Props {
  data: FmpIncomeStatementResponse;
}

const CompanyPage = ({ data }: Props) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [incomeStatementData, setIncomeStatementData] = useState<any[]>([]);
  const symbol =
    typeof router.query.symbol === "string"
      ? router.query.symbol.toUpperCase()
      : "AAPL";

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `${window.location.origin}/api/income-statements/${symbol}`
      );
      setIncomeStatementData(await res.json());
      setIsLoaded(true);
    })();
  }, [symbol]);
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
