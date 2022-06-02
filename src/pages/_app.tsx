import React from "react";
import { GlobalStyle } from "../styles/Global";
import Head from "next/head";
import favicon from "../../public/image/social-icons/linkedin.jpeg";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1654206871~hmac=f0efbb710376adcaa41e9739db8680e1"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
