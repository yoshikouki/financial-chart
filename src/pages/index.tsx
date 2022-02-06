import type { GetServerSideProps } from 'next';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DefaultLayout } from '../components/layouts/default';
import { fmp } from '../lib/financial-modeling-prep';

interface Props {
  data: incomeStatementResponse
}

const HomePage = ({ data }: Props) => {
  const incomeStatementData = data.reverse()

  return (
    <DefaultLayout>
      <BarChart width={1000} height={250} data={incomeStatementData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
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
