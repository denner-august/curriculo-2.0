import Experience from "../components/experience";
import Skills from "../components/skills";
import Social from "../components/social";
import Social_Media from "../components/social-media";
import { ContainerPrincipal } from "../styles/styles";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Project01 from "../components/project-01/index";
import Project02 from "../components/project-02";
import Post from "../components/recent-posts";
import Projects from "../components/projects/index";

export default function Principal() {
  return (
    <ContainerPrincipal className="container">
      <Profile />
      {/* <Social /> */}
      <Social_Media />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Project01 />
      <Project02 />
      {/* <Post /> */}
    </ContainerPrincipal>
  );
}
