import React from 'react'
import SearchBar from 'components/SearchBar'
import styles from './Header.module.scss'
import LogoMercadoLibre from 'assets/images/Logo_ML.png'

const Header = () => {
    return (
        <header className={styles.header__body}>
            <div className={styles.header__container}>
                <a href='/'>
                    <img
                        alt='Logo Mercado Libre'
                        className={styles.header__logoImg}
                        src={LogoMercadoLibre}
                    />
                </a>
                <SearchBar />
            </div>
        </header>
    )
}

export default Header