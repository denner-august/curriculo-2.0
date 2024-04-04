"use client";
import { Container } from "./styles";
import { useState } from "react";

import BasicModal from "../modal";

import { experiencia } from "../../../experiencia";

import { experienciaProps } from "../../../types";

export default function Experience() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dados, setDados] = useState({} as experienciaProps);

  function RequestModal(name: string) {
    let experienciaFilter = experiencia.find((item) =>
      item.Name.includes(name)
    );

    if (!experienciaFilter) {
      return setDados({} as experienciaProps);
    }

    setDados(experienciaFilter);
    handleOpen();
  }

  return (
    <Container className="experience">
      <p>Experiencias</p>
      <ul>
        <li onClick={() => RequestModal("Grupo Simios")}>
          Desenvolvedor web - Grupo Símios <br />
          abril 2024 - atual
        </li>

        <li onClick={() => RequestModal("Desenvolvendome")}>
          Aprendiz: DesenvolvendoMe <br />
          dezembro 2022 - maio 2023
        </li>

        <li onClick={() => RequestModal("Sygecom")}>
          Estágio: Sygecom Informatica - Desenvolvedor web <br />
          maio 2021 - maio 2022 <br />
        </li>

        {open ? (
          <BasicModal
            open={open}
            handleClose={handleClose}
            experiencia={dados}
          />
        ) : null}
      </ul>
    </Container>
  );
}
