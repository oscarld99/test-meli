import React from 'react'
import BreadCrumb from 'components/BreadCrumb'
import styles from './Detail.module.scss'
import { detailMock } from '__mocks__'

const Detail = () => {

  const item = detailMock.item

  return (
    <div className={styles.detail__body}>
      <BreadCrumb />
      <div className={styles.detail__container}>
        <div className={styles.detail__item}>
          <img alt={`Picture__${item.title}`} src={item.picture} />
          <div className={styles.detail__info}>
            <p>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p>{item.title}</p>
            <h3>{`$ ${item.price.amount}`}</h3>
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