const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__arr" data-aos="fade-up">
            <a className="header__logo logo" href="/">
              <img className="logo-img" src={require('../assets/images/logo.png')} alt="logo" />
              <span className="footer__inner-arrow" href="/" id="footer__arrow">
                <img src={require('../assets/images/footer-arrow.png')} alt="arrow" />
                <p>Наверх</p>
              </span>
            </a>
          </div>
          <div className="footer__box footer-box" data-aos="fade-up">
            <img className="footer-box__img" src={require('../assets/images/footer-tg.png')} alt="img" />
            <div className="footer-box__column">
              <p className="footer-box__column-text">Центр поддержки</p>
              <a className="footer-box__column-link" href="/">
                Пишите в Telegram по любым вопросам
              </a>
            </div>
          </div>
          <div className="footer__box footer-box" data-aos="fade-up">
            <img className="footer-box__img" src={require('../assets/images/footer-mail.png')} alt="img" />
            <div className="footer-box__column">
              <p className="footer-box__column-text">Связь по E-mail</p>
              <a className="footer-box__column-link" href="mailto:support@goldencash.app">
                support@goldencash.app
              </a>
            </div>
          </div>
          <a className="footer__inner-arrow" href="/" data-aos="fade-up" id="footer__arrow">
            <img src={require('../assets/images/footer-arrow.png')} alt="arrow" />
            <p>Наверх</p>
          </a>
        </div>
        <p className="footer__copy" data-aos="fade-up">
          2019-2023. GoldenCash Exchange. All rights reserved.©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
