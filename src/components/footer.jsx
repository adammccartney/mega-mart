import styles from './footer.module.css'

function Footer() {
    return (
        <>
          <div className={styles['block-copyright']}>
              © 2022&nbsp; – Mega Mart Industries <br/>
              <div className="topLink" id="topLink"><span className="nonmobile"><a href="#">↑ Back to Top</a></span></div>
          </div>
        </>
    )
}

export default Footer;
