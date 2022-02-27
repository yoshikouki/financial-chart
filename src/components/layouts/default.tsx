import { Container } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";
import BottomNavigationBar from "../BottomNavigationBar";
import TopNavigationBar from "../TopNavigationBar";

export interface DefaultLayoutProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const metaTitle = `${props.title} - Financial Chart` || "Financial Chart";
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content="Financial Chart is great application for Private investor."
        />
      </Head>
      <TopNavigationBar {...props} />
      <Container maxWidth="lg" component="main">
        {props.children}
      </Container>
      <BottomNavigationBar {...props} />
    </>
  );
};
