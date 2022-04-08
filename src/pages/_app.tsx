import { AppProps } from "next/app";
import React from "react";
import {GlobalStyle} from "../styles/Global";
function MyApp({ Component, pageProps }:any) {
  return (
    <>
      <Component {...pageProps}/>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
