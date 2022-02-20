import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type OgpHeadProps = {
  title?: string;
  description?: string;
  type?: "website" | "blog" | "article";
  site_name?: string;
  hostUrl?: string;
  imagePath?: string;
};

export const OgpHead = ({
  title = "Financial Charts",
  description = "「投資をもっと身近に」をコンセプトに投資に関する情報を、視覚的に表現してわかり易く配信するサイト。",
  type = "website",
  site_name = "Financial Charts",
  hostUrl = "https://financial-chart.com",
  imagePath = "/api/ogp/revenues/AAPL/20220219",
}: OgpHeadProps) => {
  const router = useRouter();
  const [host, setHost] = useState(hostUrl);
  const url = `${host}${router.pathname}`;
  console.info(url);
  const imageUrl = imagePath.startsWith("/")
    ? `${host}${imagePath}`
    : `${host}/${imagePath}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.origin);
    }
  }, []);

  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="@username" /> */}
    </Head>
  );
};
