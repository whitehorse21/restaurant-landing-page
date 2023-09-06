import styles from "@/styles/components/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>locations</h3>
          <a href="#" className={styles.footer__link}>
            USA
          </a>
          <a href="#" className={styles.footer__link}>
            Canada
          </a>
          <a href="#" className={styles.footer__link}>
            China
          </a>
          <a href="#" className={styles.footer__link}>
            Japan
          </a>
          <a href="#" className={styles.footer__link}>
            France
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>quick links</h3>
          <a href="#" className={styles.footer__link}>
            home
          </a>
          <a href="#" className={styles.footer__link}>
            dishes
          </a>
          <a href="#" className={styles.footer__link}>
            about
          </a>
          <a href="#" className={styles.footer__link}>
            menu
          </a>
          <a href="#" className={styles.footer__link}>
            reivew
          </a>
          <a href="#" className={styles.footer__link}>
            order
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>contact info</h3>
          <a href="#" className={styles.footer__link}>
            +1(214)-717-4816
          </a>
          <a href="#" className={styles.footer__link}>
            whitehorse9021@gmail.com
          </a>
          <a href="#" className={styles.footer__link}>
            Dallas, TX, USA
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>follow us</h3>
          <a href="#" className={styles.footer__link}>
            facebook
          </a>
          <a href="#" className={styles.footer__link}>
            twitter
          </a>
          <a href="#" className={styles.footer__link}>
            instagram
          </a>
          <a href="#" className={styles.footer__link}>
            linkedin
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        Copyright @ 2023 by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/whitehorse21"
        >
          whitehorse21
        </a>
      </div>
    </footer>
  );
}

export default Footer;
