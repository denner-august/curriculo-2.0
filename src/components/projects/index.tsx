import { useEffect } from "react";
import { Container } from "./styles";
import Link from "next/link";
import axios from "axios";
export default function Projects() {
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_KEY}
      `,
      },
    };
    axios
      .get(
        "https://api.vercel.com/v6/projects/prj_aBNIXDGrbtJBOqO3qeShnRB8C6XF",
        config
      )
      .then((response) => console.log(response.data.alias[0].domain));
  });

  return (
    <Container className="projects">
      <h2>Meus projetos</h2>
      <button>
        <Link href={"http://localhost:3000/Projetos"}>Veja todos</Link>
      </button>
    </Container>
  );
}
