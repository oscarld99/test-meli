import React from 'react'
import styles from './BreadCrumb.module.scss'

const prepareCategories = (categories: string[]) => {
    let breadCrumbText = '';
    categories.forEach((category, index) => {
        if (index > 0) breadCrumbText += ' > '
        breadCrumbText += category
    })
    return breadCrumbText
}

const BreadCrumb = ({ categories = [] }: { categories?: string[] }) => {

    const categoryText = prepareCategories(categories)

    return (
        <div className={styles.breadCrumb__container}>
            <p>{categoryText}</p>
        </div>
    )
}

export default BreadCrumb