import type { AppProps } from "next/app";
import React from "react";
import {GlobalStyle} from "../styles/Global";
function MyApp({ Component, pageProps }:any) {
  return (
    <React.Fragment>
      <Component {...pageProps}/>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
