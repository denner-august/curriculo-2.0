import { RenderCursos } from "../../../tools/renderCursos";
import { Container } from "./styles";

export default function Education() {
  return (
    <Container className="education">
      <p>Cursos e especializações</p>

      <ul>
      
        <RenderCursos
          nome="CC50: Introdução à Ciência da Computação - O Curso de Harvard, no Brasil"
          data="Março 2024"
        />

        <RenderCursos
          nome=" FreeCodeCamp: Responsive Web Design"
          data=" Março 2024"
        />
        <RenderCursos
          nome="Graduação: Analise e desenvolvimento de sistemas"
          data="
          Dezembro 2022"
        />
        <RenderCursos
          nome="Rocketseat: Ignite 2021 "
          data="
          Outubro 2022"
        />

        <RenderCursos
          nome="Desenvolvimento Ágil de Software "
          data="
           Maio de 2022"
        />
        <RenderCursos
          nome="  Git e GitHub: Formação Básica "
          data="
          Maio de 2022"
        />
      </ul>
    </Container>
  );
}
