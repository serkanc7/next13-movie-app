import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

function Categories({ categories }) {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/${category.id}`}
                    className={styles.categories__link}
                >
                    {category.name}
                </Link>
            ))}
        </div>
    )
}

export default Categories