import { Container } from "./styles";
export default function Projects({ dados }: any) {
  console.log(dados);

  // function RenderList() {
  //   return dados.map((item: { name: string; url: string }, index: string) => {
  //     return (
  //       <li key={index}>
  //         <a
  //           href={`https://${item.url}`}
  //           target={"_blank"}
  //           rel="noopener noreferrer"
  //         >
  //           {item.name}
  //         </a>
  //       </li>
  //     );
  //   });
  // }

  return (
    <Container className="projects">
      <h2>Projetos Desenvolvidos</h2>

      {/* <ul>{RenderList()}</ul> */}
    </Container>
  );
}
