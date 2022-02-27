import type { AppProps } from "next/app";
import Head from "next/head";
import { MuiTheme } from "../components/MuiTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MuiTheme>
        <Component {...pageProps} />
      </MuiTheme>
    </>
  );
}

export default MyApp;
