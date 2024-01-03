import Experience from "../components/experience";
import Skills from "../components/skills";
import Social_Media from "../components/social-media";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Projects from "../components/projects/index";
import axios from "axios";
import { GetStaticProps } from "next";
import { ContainerPrincipal } from "../styles/styles";
import { filtraUrlName } from "../../services/projetos";
import { PrincipalProps } from "../../types";

export default function Principal({ dados }: PrincipalProps) {
  return (
    <ContainerPrincipal className="container">
      <Profile />
      <Social_Media />
      <Skills />
      <Experience />
      <Education />
      <Projects dados={dados} />
    </ContainerPrincipal>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_KEY}`,
    },
  };

  const request = await axios
    .get("https://api.vercel.com/v9/projects?limit=28", config)
    .then((response) => response.data.projects);

  return {
    props: {
      dados: filtraUrlName(request),
    },
  };
};
