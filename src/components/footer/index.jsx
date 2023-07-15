import React from 'react'
import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
        <div className={styles.footer__text}>
          <small>&copy; Copyright 2023, Serkan Çelik</small>
        </div>
    </footer>
  )
}

export default Footer