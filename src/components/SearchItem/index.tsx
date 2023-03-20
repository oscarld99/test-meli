
import React from 'react'
import styles from './SearchItem.module.scss'
import { Item } from 'interfaces'
import { castMoney } from 'utils/castMoney'

const SearchItem = ({ item }: { item: Item }) => {

  const onClick = () => {
    window.location.href = `/items/${item.id}`
  }

  return (
    <div className={styles.searchItem__container} onClick={onClick}>
      <div className={styles.searchItem__image}>
        <img alt={`Picture__${item.title}`} src={item.picture} />
      </div>

      <div className={styles.searchItem__detail}>
        <h3>
          {`$ ${castMoney(`${item.price.amount}.${item.price.decimals}`)}`}
        </h3>
        <div>
          <h4>
            {item.title}
          </h4>
          <h4>
            {item.condition}
          </h4>
        </div>
      </div>
      <div className={styles.searchItem__location}>
        <p>
          {item.condition}
        </p>
      </div>
    </div >
  )
}

export default SearchItem