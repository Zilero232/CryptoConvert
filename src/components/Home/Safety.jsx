const Savety = () => {
  return (
    <section className="main__section-top section-top">
      <div className="container">
        <div className="section-top__inner">
          <div className="section-top__box">
            <h1 className="section-top__box-title title" data-aos="fade-up" data-aos-duration="500">
              Обменивай безопасно
            </h1>
            <p className="section-top__box-text" data-aos="fade-up" data-aos-duration="750">
              Главная задача которую мы ставим перед собой - быстрые и безопасные обмены для наших клиентов 24/7.
              Попробуйте наш сервис и ощутите все преимущества.
            </p>
          </div>
          <img
            className="section-top__img"
            src={require("../../assets/images/section-top-img.png")}
            alt="img"
            data-aos="fade-up"
            data-aos-duration="1250"
          />
        </div>
      </div>
    </section>
  );
};

export default Savety;
