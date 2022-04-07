import Experience from "../components/experience";
import Skills from "../components/skills";
import Social from "../components/social";
import Social_Media from "../components/social-media";
import { ContainerPrincipal } from "../styles/styles";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Post from "../components/recent-posts";
import Projects from "../components/projects/index";
import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Swal from "sweetalert2";


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
      <Post />
    </ContainerPrincipal>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_KEY}`,
    },
  };

  const request = await axios
    .get("https://api.vercel.com/v6/projects", config)
    .then((response) => response.data)
    .then((response) => response.projects)
    .then((response) => {
      const projects = [
        "curriculo-2-0",
        "praticando-meu-front-end-react-js",
        "previsao-do-tempo",
      ];

      return projects.map(
        (projeto) =>
          response.find((data: { name: string }) => data.name === projeto)?.alias.map((item:{domain:string}) => item.domain) ?? null
    
      );
    });

  return {
    props: {
      dados: request,
    },
    revalidate:86400 // um dia


      
  };
};
