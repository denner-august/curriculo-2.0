import React from "react";
import { GlobalStyle } from "../styles/Global";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="image/social-icons/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
