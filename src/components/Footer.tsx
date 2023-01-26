import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';

const Footer: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.footer

  if (!translate) {
    return <></>
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__arr" data-aos="fade-up">
            <a className="header__logo logo" href="/">
              <img className="logo-img" src={require('../assets/images/logo.png')} alt="logo" />
              <span className="footer__inner-arrow" id="footer__arrow">
                <img src={require('../assets/images/footer-arrow.png')} alt="arrow" />
                <p>{translate[prefix].top}</p>
              </span>
            </a>
          </div>
          <div className="footer__box footer-box" data-aos="fade-up">
            <img className="footer-box__img" src={require('../assets/images/footer-tg.png')} alt="img" />
            <div className="footer-box__column">
              <p className="footer-box__column-text">{translate[prefix].support}</p>
              <a className="footer-box__column-link" href={translate[prefix].telegLink}>
                {translate[prefix].teleg}
              </a>
            </div>
          </div>
          <div className="footer__box footer-box" data-aos="fade-up">
            <img className="footer-box__img" src={require('../assets/images/footer-mail.png')} alt="img" />
            <div className="footer-box__column">
              <p className="footer-box__column-text">{translate[prefix].email}</p>
              <a className="footer-box__column-link" href="mailto:support@goldencash.app">
                support@goldencash.app
              </a>
            </div>
          </div>
          <a className="footer__inner-arrow" href="/" data-aos="fade-up" id="footer__arrow">
            <img src={require('../assets/images/footer-arrow.png')} alt="arrow" />
            <p>{translate[prefix].top}</p>
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
