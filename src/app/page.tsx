"use client";
import { GlobalStyle } from "../styles/Global";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Social_Media from "../components/social-media";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Projects from "../components/projects/index";

import { ContainerPrincipal } from "../styles/styles";

export default function Principal() {
  return (
    <ContainerPrincipal className="container">
      <GlobalStyle />
      <Profile />
      <Social_Media />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </ContainerPrincipal>
  );
}
