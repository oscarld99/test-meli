import React, { useEffect, useState } from 'react'
import BreadCrumb from 'components/BreadCrumb'
import styles from './Detail.module.scss'
import { ItemDetail } from 'interfaces'
import ItemsService from 'services/items/Items.service'
import { getProductId } from 'utils/getProductId'
import { castMoney } from 'utils/castMoney'

const Detail = () => {

  const [item, setItem] = useState<ItemDetail>({} as ItemDetail)

  const searchProducts = async (productId: string) => {
    const itemsResponse = await ItemsService.getItemById(productId)
    setItem(itemsResponse.item)
  }

  useEffect(() => {
    const productId = getProductId()
    searchProducts(productId)
  }, [])

  if (!item || !item.title) {
    return <div>Loading ...</div >
  }

  return (
    <div className={styles.detail__body}>
      <BreadCrumb />
      <div className={styles.detail__container}>
        <div className={styles.detail__item}>
          <img alt={`Picture__${item.title}`} src={item.picture} />
          <div className={styles.detail__info}>
            <p>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p>{item.title}</p>
            <h3>{`$ ${castMoney(`${item.price.amount}.${item.price.decimals}`)}`}</h3>
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