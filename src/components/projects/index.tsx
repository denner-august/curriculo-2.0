import { Container } from "./styles";

interface projectsProps {
  dados: [{ name: string, url: string }]
}

export default function Projects({ dados }: projectsProps) {

  function changeNames(name: string) {
    if (name === "capitulo-2-ignite") {
      return "Dt-money"
    }

    if (name === "ignite-fundamentos-next") {
      return "Ig.news"
    }

    return name
  }

  function RenderList() {
    return dados.map((item: { name: string; url: string }, index: number) => {
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
