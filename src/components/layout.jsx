import React from 'react'


import Footer from './footer.jsx';
import Header from './header.jsx';
import ItemDisplay from './item-display.jsx';

import styles from './layout.module.css'

export const siteTitle = 'Mega Mart'

function Layout () {
  return (
      <div className={styles.container}>
      <Header siteTitle={siteTitle} />
      <main>
      <ItemDisplay />
      </main>
      <Footer />
    </div>
  );
}

// export the interface
export default Layout; 
