import React from 'react'
// import  '../styles/Button.css' 

// Modular Approach
import styles from './Button.module.css'

const Button = () => {
  return (
    <div className={styles.btn}>
      This is Button
    </div>
  )
}

export default Button