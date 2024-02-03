import { Suspense } from "react";
import { GetProjects } from "./getProjects";
import { Container } from "./styles";

export default async function Projects() {
  return (
    <Container className="projects">
      <h2>Projetos Desenvolvidos</h2>

      <ul>
        <Suspense fallback={<h1>carrregando</h1>}>
          <GetProjects />
        </Suspense>
      </ul>
    </Container>
  );
}
