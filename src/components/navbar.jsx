import React from 'react'

import styles from './navbar.module.css'

function Navbar ({}) {
  return (
      <nav>
      <div className={styles['nav-grid-container']}>
              <ul className={styles['navbar-left']}>
                <li><strong>Mega Mart</strong></li>
              </ul> 

              <ul className="cart-display">
                  <li><strong>Cart: </strong></li>
                  <li><strong className="total">100</strong></li>
              </ul> 
          </div> 
      </nav>
  )
}

export default Navbar;
