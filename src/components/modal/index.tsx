import Modal from '@mui/material/Modal';

import styles from './styles.module.scss'
import { experienciaProps } from '../../../types';

interface ModalProps {
    open: boolean,
    handleClose: () => void
    experiencia: experienciaProps
}

export default function BasicModal({ open = false, handleClose, experiencia }: ModalProps) {

    function SoftSkills() {
        return experiencia['Soft skills'].map((item, index) => {
            return <li key={item}>{item}</li>
        })
    }

    function HardSkills() {
        return experiencia['Hard Skills'].map((item, index) => {
            return <li key={item}>{item}</li>
        })
    }
    function Tecnoloogia() {
        return experiencia['Tecnologias'].map((item, index) => {
            return <li key={item}>{item}</li>
        })
    }

    return (
        <div onClick={handleClose}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={styles.Container}>
                    <p className={styles.titulo}>Empresa: {experiencia.Name}</p>
                    <p className={styles.descricao}>Descrição: {experiencia.Descricao}</p>
                    <ul>
                        <p>Soft skills :</p>
                        {SoftSkills()}

                    </ul>
                    <ul>
                        <p>Hard skills :</p>
                        {HardSkills()}
                    </ul>
                    <ul>
                        <p>Tecnologia :</p>
                        {Tecnoloogia()}
                    </ul>
                </div>
            </Modal>
        </div>
    );
}
