import type { GetServerSideProps } from 'next';
import { DefaultLayout } from '../components/layouts/default';
import { fmp } from '../lib/financial-modeling-prep';
import { incomeStatementResponse } from '../lib/financial-modeling-prep/fundamental';

interface Props {
  data: incomeStatementResponse
}

const HomePage = ({data}: Props) => {

  return (
    <DefaultLayout>
      <table>
        <tr>
          <th>date</th>
          <th>symbol</th>
          <th>reportedCurrency</th>
          <th>cik</th>
          <th>fillingDate</th>
          <th>acceptedDate</th>
          <th>calendarYear</th>
          <th>period</th>
          <th>revenue</th>
          <th>costOfRevenue</th>
          <th>grossProfit</th>
          <th>grossProfitRatio</th>
          <th>researchAndDevelopmentExpenses</th>
          <th>generalAndAdministrativeExpenses</th>
          <th>sellingAndMarketingExpenses</th>
          <th>sellingGeneralAndAdministrativeExpenses</th>
          <th>otherExpenses</th>
          <th>operatingExpenses</th>
          <th>costAndExpenses</th>
          <th>interestIncome</th>
          <th>interestExpense</th>
          <th>depreciationAndAmortization</th>
          <th>ebitda</th>
          <th>ebitdaratio</th>
          <th>operatingIncome</th>
          <th>operatingIncomeRatio</th>
          <th>totalOtherIncomeExpensesNet</th>
          <th>incomeBeforeTax</th>
          <th>incomeBeforeTaxRatio</th>
          <th>incomeTaxExpense</th>
          <th>netIncome</th>
          <th>netIncomeRatio</th>
          <th>eps</th>
          <th>epsdiluted</th>
          <th>weightedAverageShsOut</th>
          <th>weightedAverageShsOutDil</th>
          <th>link</th>
          <th>finalLink</th>
        </tr>
        {data.map((d, i: number) => {
        return (
          <tr key={i}>
            <td>{d.date}</td>
            <td>{d.symbol}</td>
            <td>{d.reportedCurrency}</td>
            <td>{d.cik}</td>
            <td>{d.fillingDate}</td>
            <td>{d.acceptedDate}</td>
            <td>{d.calendarYear}</td>
            <td>{d.period}</td>
            <td>{d.revenue}</td>
            <td>{d.costOfRevenue}</td>
            <td>{d.grossProfit}</td>
            <td>{d.grossProfitRatio}</td>
            <td>{d.researchAndDevelopmentExpenses}</td>
            <td>{d.generalAndAdministrativeExpenses}</td>
            <td>{d.sellingAndMarketingExpenses}</td>
            <td>{d.sellingGeneralAndAdministrativeExpenses}</td>
            <td>{d.otherExpenses}</td>
            <td>{d.operatingExpenses}</td>
            <td>{d.costAndExpenses}</td>
            <td>{d.interestIncome}</td>
            <td>{d.interestExpense}</td>
            <td>{d.depreciationAndAmortization}</td>
            <td>{d.ebitda}</td>
            <td>{d.ebitdaratio}</td>
            <td>{d.operatingIncome}</td>
            <td>{d.operatingIncomeRatio}</td>
            <td>{d.totalOtherIncomeExpensesNet}</td>
            <td>{d.incomeBeforeTax}</td>
            <td>{d.incomeBeforeTaxRatio}</td>
            <td>{d.incomeTaxExpense}</td>
            <td>{d.netIncome}</td>
            <td>{d.netIncomeRatio}</td>
            <td>{d.eps}</td>
            <td>{d.epsdiluted}</td>
            <td>{d.weightedAverageShsOut}</td>
            <td>{d.weightedAverageShsOutDil}</td>
            <td>{d.link}</td>
            <td>{d.finalLink}</td>
          </tr>
        )
      })}
      </table>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fmp.incomeStatement("T")
  return {
    props: {
      data: res,
    }
  }
}

export default HomePage
