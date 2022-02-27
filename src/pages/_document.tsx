import { Head, Html, Main, NextScript } from "next/document";
import { theme } from "../components/MuiTheme";

const htmlPrefix = "og: http://ogp.me/ns#";

const Document = () => {
  return (
    <Html prefix={htmlPrefix} lang="ja">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
