import React from 'react'
import ErrorImage from 'assets/images/imgError.svg'
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.error__container}>
            <img alt='Error failed to fetch' src={ErrorImage} />
        </div>
    )
}

export default Error