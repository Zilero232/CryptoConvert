const Advantages = () => {
  return (
    <section className="main__advantage main-advantage">
      <div className="container">
        <div className="main-advantage__inner">
          <h2 className="main-advantage__title title" data-aos="fade-up" data-aos-duration="500">
            Преимущества нашего сервиса
          </h2>
          <div className="main-advantage__wrapper">
            <div className="main-advantage__box main-advantage-box">
              <img
                className="main-advantage-box__img"
                src={require("../../assets/images/advantage-icon-1.png")}
                alt="img"
                data-aos="fade-up"
              />
              <div className="main-advantage-box__row">
                <p className="main-advantage-box__text" data-aos="fade-up" data-aos-duration="750">
                  Гарантии
                </p>
                <p className="main-advantage-box__subtext" data-aos="fade-up" data-aos-duration="1500">
                  У нас 100% обмены с последующими выплатами!
                </p>
              </div>
            </div>
            <div className="main-advantage__box main-advantage-box">
              <img
                className="main-advantage-box__img"
                src={require("../../assets/images/advantage-icon-2.png")}
                alt="img"
                data-aos="fade-up"
              />
              <div className="main-advantage-box__row">
                <p className="main-advantage-box__text" data-aos="fade-up" data-aos-duration="750">
                  Конфиденциальность
                </p>
                <p className="main-advantage-box__subtext" data-aos="fade-up" data-aos-duration="1500">
                  Мы не храним и не передаем, информацию о Вас, третьим лицам.
                </p>
              </div>
            </div>
            <div className="main-advantage__box main-advantage-box">
              <img
                className="main-advantage-box__img"
                src={require("../../assets/images/advantage-icon-3.png")}
                alt="img"
                data-aos="fade-up"
              />
              <div className="main-advantage-box__row">
                <p className="main-advantage-box__text" data-aos="fade-up" data-aos-duration="750">
                  Поддержка
                </p>
                <p className="main-advantage-box__subtext" data-aos="fade-up" data-aos-duration="1500">
                  Наша команда поддержки всегда готова! Ответить на ваши технические вопросы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
