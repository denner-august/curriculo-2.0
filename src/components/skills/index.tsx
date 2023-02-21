import { Container } from "./styles";

export default function Skills() {
  const tecnologias = [
    "Javascript",
    "Typescript",
    "Reactjs",
    "Scss",
    "Styled components",
    "Git",
    "Github",
    "Modelagem de dados",
    "Postgres",
    "NextJS",
  ];

  const renderTecnologia = () => {
    return tecnologias.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <Container className="skills">
      <p>Tecnologias</p>
      <ul>{renderTecnologia()}</ul>
    </Container>
  );
}
