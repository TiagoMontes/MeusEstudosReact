import React from 'react'

import styles from './Modal.module.css'

interface Props {
    // estamos dizendo que o children é um componente React
    children: React.ReactNode
}

const Modal = ({ children }: Props) => {

    // React.MouseEvent esta dizendo que o evento é do tipo click
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")

        // Adicionando a classe hide com o clique, a exclamação diz que o valor não pode ser nulo
        modal!.classList.add("hide")
    }

    return (
        <div id='modal' className='hide'>
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Texto modal</h2>
                {children}
            </div>
        </div>
  )
}

export {Modal}