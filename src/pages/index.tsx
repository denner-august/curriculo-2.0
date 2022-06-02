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

interface requestProps {
  targets: { production: { name: string; url: string } };
}

export default function Principal({ dados }: { dados: { item: string } }) {
  useEffect(() => {
    Swal.fire({
      background: "var(--body-bg-color)",
      color: "white",
      icon: "info",
      text: "Este é um Projeto ainda em desenvolvimento ",
    });
  });

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
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_KEY}`,
    },
  };

  const request = await axios
    .get("https://api.vercel.com/v9/projects?limit=28", config)
    .then((response) => response.data)
    .then((response) => response.projects);

  const projects = [
    "redux-learning",
    "nlw-return",
    "front-end-challenge-coodesh",
    "url-short",
    "fills-calcuer",
    "room-homepage",
    "formulario-de-inscricao",
    "testimonial-from-users",
    "hoteliour",
    "fale-muito-mais-agora",
  ];

  interface ProjectProps {
    targets: { production: { name: string; url: string } };
  }

  function filtraUrlName() {
    const findProjects = projects.map((item) => {
      return request.find(
        (data: { targets: { production: { name: string } } }) =>
          data.targets.production.name === item
      );
    });

    const filterProjects = findProjects.map((item: ProjectProps) => {
      return {
        name: item.targets.production.name,
        url: item.targets.production.url,
      };
    });

    return filterProjects;
  }

  return {
    props: {
      dados: filtraUrlName(),
    },
    revalidate: 86400,
  };
};
