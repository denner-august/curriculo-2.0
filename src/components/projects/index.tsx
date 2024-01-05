import { useEffect, useState } from "react";
import { Container } from "./styles";
import { getProject } from "@/../services/requestProject";

interface ProjectsProps {
  name: string;
  url: string;
}

export default async function Projects() {
  const dados = await getProject();

  function changeNames(name: string) {
    if (name === "capitulo-2-ignite") {
      return "Dt-money";
    }

    if (name === "ignite-fundamentos-next") {
      return "Ig.news";
    }

    return name;
  }

  function RenderList() {
    return dados.map((item: ProjectsProps, index: number) => {
      return (
        <li key={index}>
          <a
            href={`https://${item.url}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {changeNames(item.name)}
          </a>
        </li>
      );
    });
  }

  return (
    <Container className="projects">
      <h2>Projetos Desenvolvidos</h2>

      <ul>{RenderList()}</ul>
    </Container>
  );
}
