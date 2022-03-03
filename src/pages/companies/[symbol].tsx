import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import ChartCard from "../../components/ChartCard";
import { ResponsiveBarChart } from "../../components/charts/ResponsiveBarChart";
import { OgpHead } from "../../components/head/OgpHead";
import { DefaultLayout } from "../../components/layouts/default";
import { useIncomeStatements } from "../../hooks/api/income-statements";

const CompanyPage = () => {
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
  const incomeStatementList = [
    {
      title: "売上高",
      yDataKey: "revenue",
      xDataKey: "date",
    },
    {
      title: "EPS",
      yDataKey: "eps",
      xDataKey: "date",
    },
    {
      title: "営業利益",
      yDataKey: "operatingIncome",
      xDataKey: "date",
    },
    {
      title: "純利益",
      yDataKey: "netIncome",
      xDataKey: "date",
    },
  ];

  return (
    <DefaultLayout title={symbol}>
      <OgpHead imagePath={ogpImagePath} />

      <Wrapper maxWidth="lg">
        {incomeStatementList.map((data, i) => {
          return (
            <CardWrapper key={i}>
              <ChartCard>
                <Typography component="h2">{data.title}</Typography>
                <ResponsiveBarChart
                  yDataKey={data.yDataKey}
                  xDataKey={data.xDataKey}
                  data={incomeStatementData}
                  isLoaded={isLoaded}
                />
              </ChartCard>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </DefaultLayout>
  );
};

const CardWrapper = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(5),
}));

const Wrapper = styled(Container)(({ theme }) => ({
  padding: `${theme.spacing(5)} 0`,
}));

export default CompanyPage;
