import { Container } from "./styles";
import Image from "next/image";
import ImageProfile from "../../../public/image/perfil.jpeg";
export default function Profile() {
  return (
    <Container className="profile">
      <div className="imagem">
        <Image src={ImageProfile} height={300} width={200} objectFit="fill" />
      </div>
      <p>Denner Augusto</p>
      <p>Developer front-end</p>
    </Container>
  );
}
