import React from 'react'
import SearchItem from 'components/SearchItem'
import { searchMock } from '__mocks__'
import styles from './Search.module.scss'
import BreadCrumb from 'components/BreadCrumb'

const Search = () => {
  return (
    <div className={styles.search__container}>
      <BreadCrumb />
      <div className={styles.search__items}>
        {searchMock.items.map((item) => {
          return (
            <SearchItem item={item} key={`product__${item.id}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Search