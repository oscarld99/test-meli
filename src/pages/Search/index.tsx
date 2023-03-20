import React, { useEffect, useState } from 'react'
import SearchItem from 'components/SearchItem'
import styles from './Search.module.scss'
import BreadCrumb from 'components/BreadCrumb'
import ItemsService from 'services/items/Items.service'
import { SearchResponse } from 'interfaces'
import { getQueryParams } from 'utils/getQueryParams'

const Search = () => {

  const [searchData, setSearchData] = useState<SearchResponse>({} as SearchResponse)

  const searchProducts = async (query: string) => {
    const itemsResponse = await ItemsService.getItems(query)
    setSearchData(itemsResponse)
  }

  useEffect(() => {
    const query = getQueryParams('search')
    searchProducts(query)
  }, [])

  if (!searchData.items || searchData.items.length === 0) {
    return <div>Loading ...</div >
  }

  return (
    <div className={styles.search__container}>
      <BreadCrumb />
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