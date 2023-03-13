import { Container } from "./styles";
import { useState } from "react";

import BasicModal from "../modal";

import trabalhos from '../../../experiencia.json'

import { experienciaProps } from "../../../types";

export default function Experience() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dados, setDados] = useState({} as experienciaProps)

  function RequestModal(name: string) {

    let experienciaFilter = trabalhos.experiencia.find(item => item.Name.includes(name))

    if (!experienciaFilter) {
      return setDados({} as experienciaProps)
    }

    setDados(experienciaFilter)
    handleOpen()
  }

  return (
    <Container className="experience">
      <p>Experiencias</p>
      <ul>
        <li onClick={() => RequestModal("Sygecom")}>
          Estágio: Sygecom Informatica <br></br>
          05/2021 - 05/2022 Desenvolvedor mobile <br></br>
        </li>

        <li onClick={() => RequestModal("Desenvolvendome")} >
          Aprendiz: DesenvolvendoMe<br></br>
          dez de 2022 - o momento <br></br>
        </li>

        {open ? <BasicModal open={open} handleClose={handleClose} experiencia={dados} /> : null}

      </ul>
    </Container>
  );
}
