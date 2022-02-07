import type { GetServerSideProps } from 'next';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DefaultLayout } from '../components/layouts/default';
import { fmp } from '../lib/financial-modeling-prep';

interface Props {
  data: incomeStatementResponse
}

const HomePage = ({ data }: Props) => {
  const incomeStatementData = data.reverse()

  return (
    <DefaultLayout>
      <ResponsiveContainer width={"100%"} height={"100%"} minWidth={300} minHeight={300} >
        <BarChart data={incomeStatementData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
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
