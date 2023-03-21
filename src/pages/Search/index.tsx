import React, { useEffect, useState } from 'react'
import SearchItem from 'components/SearchItem'
import styles from './Search.module.scss'
import BreadCrumb from 'components/BreadCrumb'
import ItemsService from 'services/items/Items.service'
import { SearchResponse } from 'interfaces'
import { getQueryParams } from 'utils/getQueryParams'
import SearchItemLoader from 'components/Loaders/SearchItemLoader'
import BreadCrumbLoader from 'components/Loaders/BreadCrumbLoader'

const Search = () => {

  const [searchData, setSearchData] = useState<SearchResponse>({} as SearchResponse)
  const [loading, setLoading] = useState(true)

  const searchProducts = async (query: string) => {
    const itemsResponse = await ItemsService.getItems(query)
    setSearchData(itemsResponse)
    setLoading(false)
  }

  useEffect(() => {
    const query = getQueryParams('search')
    searchProducts(query)
  }, [])

  if (loading) {
    return <div className={styles.search__container}>
      <BreadCrumbLoader />
      <div className={styles.search__items}>
        <SearchItemLoader />
        <SearchItemLoader />
        <SearchItemLoader />
        <SearchItemLoader />
      </div>
    </div>
  }

  return (
    <div className={styles.search__container}>
      <BreadCrumb categories={searchData.categories}/>
      <div className={styles.search__items}>
        {searchData?.items?.map((item) => {
          return (
            <SearchItem item={item} key={`product__${item.id}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Search