
import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import searchImage from 'assets/images/ic_Search.png'
import InputText from 'components/InputText'

const SearchBar = () => {

  const [searchText, setSearchText] = useState('')

  const onSearch = () => {
    window.location.href = `/items?search=${searchText}`
  }

  return (
    <div className={styles.searchBar__container}>
      <InputText
        onChangeText={setSearchText}
        placeholder='Nunca dejes de buscar'
        value={searchText}
      />
      <button
        className={styles.searchBar__button}
        onClick={onSearch}
        type='submit'>
        <img src={searchImage} alt='search button mercado libre' />
      </button>
    </div >
  )
}

export default SearchBar