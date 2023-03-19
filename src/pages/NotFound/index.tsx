import React from 'react'
import NotFoundImage from 'assets/images/notFound.svg'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound__body}>
      <div className={styles.notFound__container}>
        <img
          alt='Pagina no encontrada'
          src={NotFoundImage}
        />
        <h4>
          Parece que esta página no existe
        </h4>
        <a href='/'>
          Ir a la página principal
        </a>
      </div>
    </div>
  )
}

export default NotFound