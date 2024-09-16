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
      <p>Experiencias - Clique para mais informações</p>
      <ul>
        <li onClick={() => RequestModal("Grupo Simios")}>
          Desenvolvedor Full Stack - Grupo Símios (Voluntário) <br />
          abril 2024 - setembro 2024
        </li>

        <li onClick={() => RequestModal("Sygecom")}>
          Estágio: Sygecom Informatica - Desenvolvedor Full Stack <br />
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
