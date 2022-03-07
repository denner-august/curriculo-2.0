import Image from "next/image";
import { Container } from "./styles";

import Linkedin from "../../../public/image/social-icons/linkedin.jpeg";

import Github from "../../../public/image/social-icons/github.png";
import whatsapp from "../../../public/image/social-icons/whatsapp.png";
import Email from "../../../public/image/social-icons/email.png";

export default function Social_Media(): JSX.Element {
  function CopyEmail(email: any) {
    navigator.clipboard.writeText(email.target.innerHTML);
    alert("email copiado");
  }

  return (
    <Container className="social-media">
      <ul>
        <li>
          <Image
            width={50}
            height={50}
            objectFit="contain"
            className="social-media"
            src={Linkedin}
            alt="Linkedin"
          />
          <a
            href="https://www.linkedin.com/in/denner-bernardes"
            target={"black"}
          >
            Linkedin
          </a>
        </li>
        <li>
          <Image
            width={50}
            height={50}
            objectFit="contain"
            className="social-media"
            src={Github}
            alt="Github"
          />
          <a href="https://github.com/denner-august" target={"black"}>
            Github
          </a>
        </li>
        <li>
          <Image
            width={50}
            height={50}
            objectFit="contain"
            className="social-media"
            src={whatsapp}
            alt="whatsapp"
          />
          <a
            href="https://api.whatsapp.com/send?phone=5511978057417&text="
            target={"black"}
          >
            Whatsapp
          </a>
        </li>
        <li>
          <Image
            width={50}
            height={50}
            objectFit="contain"
            className="social-media"
            src={Email}
            alt="whatsapp"
          />
          <a href="mailto:denner.augusto90@gmail.com">
            <p onClick={(event) => CopyEmail(event)}>
              denner.augusto90@gmail.com
            </p>
          </a>
        </li>
      </ul>
    </Container>
  );
}
