import { Container } from "./styles";

export default function Education() {
  return (
    <Container className="education">
      <p>Cursos e especializações</p>
      <ul>
        <li>
          Graduação: Analise e desenvolvimento de sistemas <br></br> termino:
          dezembro 2022
        </li>
        <li>
          Rocketseat: Ignite 2021 <br /> termino: outubro 2022
        </li>
        <li>
          Desenvolvimento Ágil de Software <br /> termino: 21 de maio de 2022
        </li>
        <li>
          Git e GitHub: Formação Básica <br /> termino: 27 de maio de 2022
        </li>
      </ul>
    </Container>
  );
}
