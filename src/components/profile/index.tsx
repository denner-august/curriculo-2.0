import { Container, Names } from "./styles";
import Image from "next/image";
import ImageProfile from "../../../public/image/perfil.jpeg";
export default function Profile() {
  return (
    <Container className="profile">
      <div className="imagem">
        <Image
          src={ImageProfile}
          height={150}
          width={100}
          quality={100}
          alt="imagem do usuario"
        />
      </div>
      <Names>
        <p>Denner Augusto</p>
        <p>Developer front-end</p>
      </Names>
    </Container>
  );
}
