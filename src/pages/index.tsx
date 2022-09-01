import Experience from "../components/experience";
import Skills from "../components/skills";
import Social_Media from "../components/social-media";
import { ContainerPrincipal } from "../styles/styles";
import Education from "../components/education/index";
import Profile from "../components/profile";
import Projects from "../components/projects/index";
import axios from "axios";
import { GetStaticProps } from "next";

export default function Principal({ dados }: { dados: { item: string } }) {
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
    .then((response) => response.data)
    .then((response) => response.projects);

  const projects = [
    "praticando-meu-front-end-react-js",
    "redux-learning",
    "nlw-return",
    "front-end-challenge-coodesh",
    "fills-calcuer",
    "capitulo-2-ignite",
    "room-homepage",
    "formulario-de-inscricao",
    "testimonial-from-users",
    "hoteliour",
    "fale-muito-mais-agora",
    "ignite-interface-com-chakra-ui",
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

        url:
          item.targets.production.name === "capitulo-2-ignite"
            ? "capitulo-2-ignite.vercel.app/"
            : item.targets.production.name === "fills-calcuer"
            ? "fills-calculator.vercel.app"
            : item.targets.production.name === "ignite-interface-com-chakra-ui"
            ? "worldtrip5-chakra.vercel.app"
            : item.targets.production.url,
      };
    });

    return filterProjects;
  }

  return {
    props: {
      dados: filtraUrlName(),
    },
  };
};
