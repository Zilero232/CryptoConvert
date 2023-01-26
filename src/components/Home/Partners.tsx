import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { renderImage } from "../../utils/renderImage";

const Partners: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.partner

  if (!translate) {
    return <></>
  }

  return (
    <section className="main__partners main-partners">
      <div className="container">
        <div className="main-partners__inner">
          <h2 className="main-partners__title title" data-aos="fade-up" data-aos-duration="500">
            {translate[prefix].title}
          </h2>
          <div className="main-partners__wrapper">
            <div className="main-partners__box main-partners-box">
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                {renderImage('main-partners-box__link-img', 'partners-img-1.svg')}
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                {renderImage('main-partners-box__link-img', 'partners-img-2.svg')}
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                <img
                  className="main-partners-box__link-img"
                  src={require("../../assets/images/partners-img-3.png")}
                  alt="partner"
                />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                {renderImage("main-partners-box__link-img", "partners-img-4.svg")}
              </a>
            </div>
            <div className="main-partners__box main-partners-box">
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="1000">
                {renderImage('main-partners-box__link-img', 'partners-img-5.svg')}
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="1000">
                <img
                  className="main-partners-box__link-img"
                  src={require("../../assets/images/partners-img-6.png")}
                  alt="partner"
                />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="1000">
                <img
                  className="main-partners-box__link-img"
                  src={require("../../assets/images/partners-img-7.png")}
                  alt="partner"
                />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="1000">
                <img
                  className="main-partners-box__link-img"
                  src={require("../../assets/images/partners-img-8.png")}
                  alt="partner"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
