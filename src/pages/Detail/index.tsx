import React, { useEffect, useState } from 'react'
import BreadCrumb from 'components/BreadCrumb'
import styles from './Detail.module.scss'
import { ItemDetail } from 'interfaces'
import ItemsService from 'services/items/Items.service'
import { castMoney } from 'utils/castMoney'
import DetailLoader from 'components/Loaders/DetailLoader'
import BreadCrumbLoader from 'components/Loaders/BreadCrumbLoader'
import Error from 'components/Error'
import { useLocation } from 'react-router-dom'

const Detail = () => {

  const location = useLocation();
  const [item, setItem] = useState<ItemDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const searchProducts = async (productId: string) => {
    const itemsResponse = await ItemsService.getItemById(productId)
    if (!itemsResponse) return setError(true)
    setItem(itemsResponse.item)
    setLoading(false)
  }

  useEffect(() => {
    const productId = location.pathname.split('/')[2]
    searchProducts(productId)
  }, [location.pathname])

  if (loading) {
    return <div className={styles.detail__body}>
      <BreadCrumbLoader />
      <DetailLoader />
    </div >
  }

  if (error || !item) {
    return (
      <div className={styles.search__container}>
        <Error />
      </div>
    )
  }

  return (
    <div className={styles.detail__body}>
      <BreadCrumb categories={[]} />
      <div className={styles.detail__container}>
        <div className={styles.detail__item}>
          <img alt={`Picture__${item.title}`} src={item.picture} />
          <div className={styles.detail__info}>
            <p>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p role='contentinfo'>{item.title}</p>
            <h3>
              {`$ ${castMoney(`${item.price.amount}`)}`}
              <span>{item.price.decimals}</span>
            </h3>
            <button>Comprar</button>
          </div>
        </div>
        <div className={styles.detail__itemDetail}>
          <h4>Descripcion del producto</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail