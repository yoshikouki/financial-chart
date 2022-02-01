import Head from "next/head";
import { ReactNode } from "react";

export const DefaultLayout = (props: { title?: string; children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{props.title || 'Financial Chart'}</title>
        <meta name="description" content="Financial Chart is great application for Private investor." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </>
  )
}
