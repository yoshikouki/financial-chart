import Head from "next/head";
import { ReactNode } from "react";

export const DefaultLayout = (props: {
  title?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>{props.title || "Financial Chart"}</title>
        <meta
          name="description"
          content="Financial Chart is great application for Private investor."
        />
      </Head>
      <main>{props.children}</main>
    </>
  );
};
