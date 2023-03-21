
import React from 'react'
import styles from './SearchItemLoader.module.scss'
import loaderStyles from '../Loaders.module.scss'

const SearchItemLoader = () => {

  return (
    <div className={styles.searchItem__container} >
      <div
        className={`${loaderStyles.loader__effect} ${styles['searchItem__image--loader']}`}
        title='loading'
      />

      <div className={styles.searchItem__detail}>
        <div
          className={`${loaderStyles.loader__effect} ${styles['searchItem__price--loader']}`}
          title='loading'
        />
        <div>
          <div
            className={`${loaderStyles.loader__effect} ${styles['searchItem__tittle--loader']}`}
            title='loading'
          />
          <div
            className={`${loaderStyles.loader__effect} ${styles['searchItem__condition--loader']}`}
            title='loading'
          />
        </div>
      </div>
      <div className={styles.searchItem__location}>
        <div
          className={`${loaderStyles.loader__effect} ${styles['searchItem__location--loader']}`}
          title='loading'
        />
      </div>
    </div >
  )
}

export default SearchItemLoader