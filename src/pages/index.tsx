import { DefaultLayout } from "../components/layouts/default";

const HomePage = () => {
  return (
    <DefaultLayout>
      <h1>Financial Chart is here</h1>
      <p>TEST_ENV</p>
      <p>{process.env.TEST_ENV}</p>
    </DefaultLayout>
  );
};

export default HomePage;
