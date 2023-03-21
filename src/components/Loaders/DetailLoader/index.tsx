
import React from 'react'
import styles from './DetailLoader.module.scss'
import loaderStyles from '../Loaders.module.scss'

const DetailLoader = () => {

  return (
    <div className={styles.detailLoader__container} >
      <div className={styles.detailLoader__item}>
        <div
          className={`${loaderStyles.loader__effect} ${styles.detailLoader__image}`}
          title='loading'
        />

        <div className={styles.detailLoader__info}>
          <div
            className={`${loaderStyles.loader__effect} ${styles.detailLoader__condition}`}
            title='loading'
          />
          <div
            className={`${loaderStyles.loader__effect} ${styles.detailLoader__h3}`}
            title='loading'
          />
          <div
            className={`${loaderStyles.loader__effect} ${styles.detailLoader__h3}`}
            title='loading'
          />
          <div
            className={`${loaderStyles.loader__effect} ${styles.detailLoader__button}`}
            title='loading'
          />
        </div>

      </div>
      <div className={styles.detailLoader__itemDetail}>
        <div
          className={`${loaderStyles.loader__effect} ${styles.detailLoader__h3}`}
          title='loading'
        />
        <div
          className={`${loaderStyles.loader__effect} ${styles.detailLoader__description}`}
          title='loading'
        />
        <div
          className={`${loaderStyles.loader__effect} ${styles.detailLoader__description}`}
          title='loading'
        />
        <div
          className={`${loaderStyles.loader__effect} ${styles.detailLoader__description}`}
          title='loading'
        />
      </div>
    </div>
  )
}

export default DetailLoader