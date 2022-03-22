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
import axios from "axios";
import { GetStaticProps } from "next";

export default function Principal({ dados }: any) {
  return (
    <ContainerPrincipal className="container">
      <Profile />
      <Social />
      <Social_Media />
      <Skills />
      <Experience />
      <Education />
      <Projects dados={dados} />
      <Project01 />
      <Project02 />
      <Post />
    </ContainerPrincipal>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_KEY}`,
    },
  };

  const request = await axios.get("https://api.vercel.com/v6/projects", config);

  return {
    props: {
      dados: request.data,
    },

    revalidate: 10080,
  };
};
