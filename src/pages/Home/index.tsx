import React from 'react'
import styles from './Home.module.scss'
import ImgInstruccion1 from 'assets/images/instruccions/instruccion_search_1.png'
import ImgInstruccion2 from 'assets/images/instruccions/instruccion_search_2.png'
import ImgInstruccion3 from 'assets/images/instruccions/instruccion_detail_1.png'

const Home = () => {
  return (
    <div className={styles.home__container}>
      <h2>GUIA DE USO</h2>
      <div className={styles.home__instruccion}>
        <div>
          <h3>Buscar productos</h3>
          <p>
            1) Para buscar un producto da click en la caja de texto señalada y escribe el nombre o detalle del producto a consultar.
          </p>
          <img
            alt='User guide search 1'
            className={styles.home__image}
            src={ImgInstruccion1}
          />
          <p>
            2) Luego de haber escrito lo que vas a buscar da click en el botón con la lupa señalado con rojo o presiona la tecla enter.
          </p>
          <img
            alt='User guide search 2'
            className={styles.home__image}
            src={ImgInstruccion2}
          />
        </div>
        <hr className={styles.home__divider}/>
        <div>
          <h3>Ver detalles de un producto</h3>
          <p>
            1) Para ver la información a detalle de un producto solo debes posicionarte sobre este y dar click.
          </p>
          <img
            alt='User guide detail 1'
            className={styles.home__image}
            src={ImgInstruccion3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home