import Dialog from "@mui/material/Dialog";

import styles from "./styles.module.scss";
import { experienciaProps } from "../../../types";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  experiencia: experienciaProps;
}

export default function BasicModal({
  open = false,
  handleClose,
  experiencia,
}: ModalProps) {
  function HardSkills() {
    return experiencia["Hard Skills"]?.map((item, index) => {
      return <li key={item}>{item}</li>;
    });
  }

  function Competencias() {
    return experiencia["Competencias"]?.map((item, index) => {
      return <li key={item}>{item}</li>;
    });
  }
  function Contribuições() {
    return experiencia["Contribuições"]?.map((item, index) => {
      return <li key={item}>{item}</li>;
    });
  }

  function Promoção() {
    const Cargo = experiencia["Promoção"]?.Cargo
      ? experiencia["Promoção"]?.Cargo
      : null;
    const Contribuições = experiencia["Promoção"]?.Contribuições.map(
      (item, index) => {
        return <li key={item}>{item}</li>;
      }
    );

    return [Cargo, Contribuições];
  }

  function Recomendações() {
    const Recomendações = experiencia["Recomendações"]?.map((item, index) => {
      return <li key={item}>{item}</li>;
    });

    if (Recomendações !== undefined) {
      return Recomendações;
    }

    return null;
  }

  return (
    <div onClick={handleClose}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth={"lg"}
      >
        <div className={styles.Container}>
          <p className={styles.titulo}>Empresa: {experiencia.Name}</p>
          <p className={styles.descricao}>Descrição: {experiencia.Descricao}</p>

          <ul>
            {Promoção()[0] !== null ? <p>Promoção : {Promoção()[0]}</p> : null}

            {Promoção()[1]}
          </ul>

          <ul>
            <p>Contribuições :</p>
            {Contribuições()}
          </ul>

          <ul className={styles.hardSkills}>
            <p>Hard skills :</p>
            {HardSkills()}
          </ul>

          <ul>
            <p>Competencias :</p>
            {Competencias()}
          </ul>

          {Recomendações() !== null ? (
            <ul>
              <p>Recomendações :</p>
              {Recomendações()}
            </ul>
          ) : null}
        </div>
      </Dialog>
    </div>
  );
}
