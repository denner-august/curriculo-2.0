import { Container } from "./styles";
export default function Projects({ dados }: any) {

  function RenderList(){
    return dados.map((item: any) => {
      return (
        <li key={item}>
          <a href={`https://${item}`}  target={'_blank'} rel="noopener noreferrer" >{item}</a>
        </li>
      );
    });
  }

  return (
    <Container className="projects">
      <h2>Projetos em desenvolvimento</h2>

      <ul>
        {RenderList()}
      </ul>
    </Container>
  );
}
