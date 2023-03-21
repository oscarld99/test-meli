import React from 'react'
import EmptyImage from 'assets/images/Empty.svg'
import styles from './Empty.module.scss'

const Empty = () => {
    return (
        <div className={styles.empty__container}>
            <h3>No se han encontrado resultados para tu busqueda</h3>
            <img alt='Item not found' src={EmptyImage} />
        </div>
    )
}

export default Empty