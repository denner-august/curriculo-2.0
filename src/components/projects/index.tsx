import { Container } from "./styles";
import Link from "next/link";
import axios from "axios";
export default function Projects({ dados }: any) {
  return (
    <Container className="projects">
      <h2>Meus projetos</h2>
      <button>
        <Link href={"http://localhost:3000/Projetos"}>Veja todos</Link>
      </button>
    </Container>
  );
}
