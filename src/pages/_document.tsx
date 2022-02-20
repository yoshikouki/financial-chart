import { Head, Html, Main, NextScript } from "next/document";

const htmlPrefix = "og: http://ogp.me/ns#";

const Document = () => {
  return (
    <Html prefix={htmlPrefix}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
