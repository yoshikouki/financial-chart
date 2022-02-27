import { Container } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";
import TopNavigationBar from "../TopNavigationBar";

export interface DefaultLayoutProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{props.title || "Financial Chart"}</title>
        <meta
          name="description"
          content="Financial Chart is great application for Private investor."
        />
      </Head>
      <TopNavigationBar {...props} />
      <main>
        <Container maxWidth="lg">{props.children}</Container>
      </main>
    </>
  );
};
