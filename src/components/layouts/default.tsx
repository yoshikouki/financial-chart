import Head from "next/head";
import { ReactNode } from "react";

export const DefaultLayout = (props: { title?: string; children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{props.title || 'Financial Chart'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{props.children}</main>
    </>
  )
}
