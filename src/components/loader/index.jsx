import React from 'react'
import styles from './styles.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.loader__container}></div>
    </div>
  )
}

export default Loader