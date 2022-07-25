import Header from './header.jsx'
import Footer from './footer.jsx'

import styles from './layout.module.css'

export const siteTitle = 'Mega Mart'

const prvtLayout = ({ children }) => {
  return (
      <div className={styles.container}>
      <head>
        <title>{siteTitle}</title>
      </head>
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
    </div>
  )
}

// set up the module's public interface
const layoutmodule = {
  Layout: prvtLayout
}

// export the interface
export default layoutmodule
