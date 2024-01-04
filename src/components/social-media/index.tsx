import { Container } from "./styles";

import Linkedin from "@/../public/image/social-icons/linkedin.jpeg";
import Github from "@/../public/image/social-icons/github.png";
import Email from "@/../public/image/social-icons/email.png";

import { IconsImage } from "../../../services/iconsImage";

export default function Social_Media(): JSX.Element {
  function CopyEmail(email: any) {
    navigator.clipboard.writeText(email.target.innerHTML);
    alert("email copiado");
  }

  return (
    <Container className="social-media">
      <ul>
        <li>
          <IconsImage
            width={50}
            height={50}
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
          <IconsImage
            width={50}
            height={50}
            className="social-media"
            src={Github}
            alt="Github"
          />
          <a href="https://github.com/denner-august" target={"black"}>
            Github
          </a>
        </li>

        <li>
          <IconsImage
            width={50}
            height={50}
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
