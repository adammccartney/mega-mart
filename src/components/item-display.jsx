import React from 'react';

import styles from './item-display.module.css';

function ItemDisplay () {
    return (
      <div className={styles["item-display-container"]}>
      <div className={styles["item-grid-container"]}>
          <div className={styles["item-description"]}>Shoes</div>
          <div className={styles["item-price"]}>44</div>
          <button className={styles["add-to-cart"]}>Add to cart</button>
          <div className={styles["circle"]}></div>
      </div>
      <div className={styles["item-grid-container"]}>
          <div className={styles["item-description"]}>Shirt</div>
          <div className={styles["item-price"]}>28</div>
          <button className={styles["add-to-cart"]}>Add to cart</button>
          <div className={styles["circle"]}></div>
      </div>
    </div>
    );
}

export default ItemDisplay;
