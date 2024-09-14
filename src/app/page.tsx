"use client";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { GlobalStyle } from "../components/styles/Global";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Social_Media from "../components/social-media";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Projects from "../components/projects/index";

import { ContainerPrincipal } from "../components/styles/styles";
import Interesse from "@/components/interesse/interesse";

import { ToastContainer } from "react-toastify";

export default function Principal() {
  return (
    <>
      <GoogleAnalytics gaId="G-KGWL88DFM3" />
      <GoogleTagManager gtmId="GTM-W2MH3C4" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ContainerPrincipal className="container">
        <GlobalStyle />
        <Profile />
        <Social_Media />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Interesse />
      </ContainerPrincipal>
    </>
  );
}
