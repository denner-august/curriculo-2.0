import { Container } from "./styles";

export default function Skills() {
  const tecnologias = [
    "Javascript",
    "Reactjs",
    "Git",
    "Github",
    "Html",
    "Css",
    "Scss",
    "Typescript",
    "Styled components",
    "Postgres",
    "Modelagem de dados",
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
