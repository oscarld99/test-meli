
import React from 'react'
import styles from './BreadCrumbLoader.module.scss'
import loaderStyles from '../Loaders.module.scss'

const BreadCrumbLoader = () => {

  return (
    <div className={styles.breadCrumbLoader__container} >
      <div
        className={`${loaderStyles.loader__effect} ${styles.breadCrumbLoader__item}`}
        title='loading'
      />
      <div
        className={`${loaderStyles.loader__effect} ${styles.breadCrumbLoader__item}`}
        title='loading'
      />
      <div
        className={`${loaderStyles.loader__effect} ${styles.breadCrumbLoader__item}`}
        title='loading'
      />
    </div >
  )
}

export default BreadCrumbLoader