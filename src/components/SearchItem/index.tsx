
import React from 'react'
import { Item } from 'interfaces'
import { castMoney } from 'utils/castMoney'
import shippingImage from 'assets/images/ic_shipping.png'
import styles from './SearchItem.module.scss'
import { useNavigate } from 'react-router-dom'

const SearchItem = ({ item }: { item: Item }) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/items/${item.id}`)
  }

  return (
    <>
      <div className={styles.searchItem__container} onClick={onClick}>
        <div className={styles.searchItem__image}>
          <img alt={`Picture__${item.title}`} src={item.picture} />
        </div>
        <div className={styles.searchItem__detail}>
          <h3>
            {`$ ${castMoney(`${item.price.amount}`)}`}
            <span>
              {item.price.decimals}
            </span>
            {item.free_shipping && <img src={shippingImage} alt='Free shipping' />}
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
            {item.city}
          </p>
        </div>
      </div>
      <hr className={styles.searchItem__divider} />
    </>
  )
}

export default SearchItem