import React, { useEffect, useState } from 'react'
import SearchItem from 'components/SearchItem'
import styles from './Search.module.scss'
import BreadCrumb from 'components/BreadCrumb'
import ItemsService from 'services/items/Items.service'
import { SearchResponse } from 'interfaces'
import SearchItemLoader from 'components/Loaders/SearchItemLoader'
import BreadCrumbLoader from 'components/Loaders/BreadCrumbLoader'
import Error from 'components/Error'
import Empty from 'components/Empty'
import { useLocation } from 'react-router-dom'

const Search = () => {

  const { search } = useLocation();
  const [searchData, setSearchData] = useState<SearchResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const emptyItems = searchData?.items.length === 0

  const searchProducts = async (query: string) => {
    const itemsResponse = await ItemsService.getItems(query)
    if (!itemsResponse)
      return setError(true)
    setSearchData(itemsResponse)
    setLoading(false)
  }

  useEffect(() => {
    const query = new URLSearchParams(search).get('search') ?? ''
    searchProducts(query)
  }, [search])

  if (error) {
    return (
      <div className={styles.search__container}>
        <Error />
      </div>
    )
  }

  if (loading) {
    return <div className={styles.search__container}>
      <BreadCrumbLoader />
      <div className={styles.search__items} role='group'>
        {Array.from(Array(4)).map((_, index) => {
          return <SearchItemLoader key={index} />
        })}
      </div>
    </div>
  }

  return (
    <div className={styles.search__container}>
      <BreadCrumb categories={searchData?.categories} />
      <div className={styles.search__items}>
        {(emptyItems) && <Empty />}
        {(!emptyItems) && searchData?.items?.map((item) => {
          return (
            <SearchItem item={item} key={`product__${item.id}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Search