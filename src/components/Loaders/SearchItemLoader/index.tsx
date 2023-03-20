
import React from 'react'
import styles from './SearchItemLoader.module.scss'

const SearchItemLoader = () => {

  return (
    <div className={styles.searchItem__container} >
      <div
        className={`${styles.searchItem__loader} ${styles['searchItem__image--loader']}`}
        title='loading'
      />

      <div className={styles.searchItem__detail}>
        <div
          className={`${styles.searchItem__loader} ${styles['searchItem__price--loader']}`}
          title='loading'
        />
        <div>
          <div
            className={`${styles.searchItem__loader} ${styles['searchItem__tittle--loader']}`}
            title='loading'
          />
          <div
            className={`${styles.searchItem__loader} ${styles['searchItem__condition--loader']}`}
            title='loading'
          />
        </div>
      </div>
      <div className={styles.searchItem__location}>
        <div
          className={`${styles.searchItem__loader} ${styles['searchItem__location--loader']}`}
          title='loading'
        />
      </div>
    </div >
  )
}

export default SearchItemLoader