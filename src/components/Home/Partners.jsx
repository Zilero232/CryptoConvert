import partnersImg1 from "../../assets/images/partners-img-1.svg";
import partnersImg2 from "../../assets/images/partners-img-2.svg";
import partnersImg4 from "../../assets/images/partners-img-4.svg";
import partnersImg5 from "../../assets/images/partners-img-5.svg";

const Partners = () => {
  return (
    <section className="main__partners main-partners">
      <div className="container">
        <div className="main-partners__inner">
          <h2 className="main-partners__title title" data-aos="fade-up" data-aos-duration="500">
            Партнёры
          </h2>
          <div className="main-partners__wrapper">
            <div className="main-partners__box main-partners-box">
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                <img className="main-partners-box__link-img" src={partnersImg1} alt="partner" />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                <img className="main-partners-box__link-img" src={partnersImg2} alt="partner" />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                <img
                  className="main-partners-box__link-img"
                  src={require("../../assets/images/partners-img-3.png")}
                  alt="partner"
                />
              </a>
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="750">
                <img className="main-partners-box__link-img" src={partnersImg4} alt="partner" />
              </a>
            </div>
            <div className="main-partners__box main-partners-box">
              <a className="main-partners-box__link" href="/" data-aos="fade-up" data-aos-duration="1000">
                <img
                  className="main-partners-box__link-img"
                  src={partnersImg5}
                  alt="partner"
                />
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
