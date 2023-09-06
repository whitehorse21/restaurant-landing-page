import styles from "@/styles/components/About.module.scss";

function About() {
  return (
    <section className={styles.about} id="about">
      <h3 className="sub-heading">about us</h3>
      <h1 className="heading">why choose us?</h1>

      <div className={styles.about__row}>
        <div className={styles.about__image}>
          <img src="images/about-img.png" alt="" />
        </div>

        <div className={styles.about__content}>
          <h3 className={styles.about__title}>best food in the country</h3>
          <p className={styles.about__description}>
            The customer is very important, the customer will be followed by the
            customer. Pure football land Aenean vulputate members no eu maximus.
            In financing, it is but the sad sauce, before from the occasional
            ligula, is not for a long time it was like ex.
          </p>
          <p className={styles.about__description}>
            The customer is very important, the customer will be followed by the
            customer. Pure football land Aenean vulputate members no eu maximus.
            In financing, it is but the sad sauce, before from the occasional
            ligula, is not for a long time it was like ex.
          </p>
          <div className={styles.about__container}>
            <div className={styles.about__icon}>
              <i className="fas fa fa-shipping-fast"></i>
              <span>free delivery</span>
            </div>
            <div className={styles.about__icon}>
              <i className="fas fa fa-dollar-sign"></i>
              <span>easy payments</span>
            </div>
            <div className={styles.about__icon}>
              <i className="fas fa fa-headset"></i>
              <span>24/7 service</span>
            </div>
          </div>
          <a href="#" className="button">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
