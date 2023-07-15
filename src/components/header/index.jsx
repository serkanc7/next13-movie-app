import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'
import { RiMovie2Line } from 'react-icons/ri';
import SearchBar from '../searchBar';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}><RiMovie2Line/>LOGO</div>
        <SearchBar />
        <nav className={styles.header__nav}>
          <Link className={styles.header__link} href="/">Home</Link>
          <Link className={styles.header__link} href="/about">About</Link>
          <Link className={styles.header__link} href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header