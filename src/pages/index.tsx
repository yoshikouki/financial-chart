import type { GetServerSideProps } from 'next';
import { DefaultLayout } from '../components/layouts/default';
import { fmp } from '../lib/financial-modeling-prep';
import { ResponsiveBarChart } from "../components/ResponsiveBarChart";

interface Props {
  data: incomeStatementResponse
}

const HomePage = ({ data }: Props) => {
  const incomeStatementData = data.reverse()

  return (
    <DefaultLayout>
      <h1>T</h1>
      <h2>売上高</h2>
      <ResponsiveBarChart data={incomeStatementData} />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fmp.incomeStatement("T", { limit: 5 })
  return {
    props: {
      data: res,
    }
  }
}

export default HomePage
