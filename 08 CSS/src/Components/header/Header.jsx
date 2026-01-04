import React from 'react'
// import '../styles/Header.css'

// Modular Approach
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>This is header</h3> 
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header