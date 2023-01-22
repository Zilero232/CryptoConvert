import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

const slider = [
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
  {
    title: `Очень крутая обменка с лучшей тех поддержкой. рекомендую всем) Очень крутая обменка с лучшей тех поддержкой. рекомендую всем)`,
    date: "2 января 2023 – 14:32",
    name: "Ярослав",
  },
];

const ReccalsSlider = () => {
  return (
    <section className="main__recalls recalls" id="recalls">
      <div className="container">
        <div className="recalls__inner">
          <h2 className="recalls__title title" data-aos="fade-up" data-aos-duration="500">
            Отзывы
          </h2>
          <p className="recalls__text" data-aos="fade-up" data-aos-duration="1000">
            Отзывы автоматически появляются на сайте из BestChange. Чтобы оставить отзыв, перейдите на BestChange и он
            автоматически появиться на сайте.
          </p>
          <div className="recalls__arrow-box">
            <button className="recalls-swiper-button-prev swiper-button-prev">
              <img src={require("../../assets/images/recalls-arrow.png")} alt="arrow" />
            </button>
            <button className="recalls-swiper-button-next swiper-button-next">
              <img src={require("../../assets/images/recalls-arrow.png")} alt="arrow" />
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".recalls-swiper-button-next",
              prevEl: ".recalls-swiper-button-prev",
            }}
            spaceBetween={50}
            slidesPerView={3}
            className="recalls-swiper swiper"
          >
            {slider.map((item, idx) => {
              return (
                <SwiperSlide key={idx} className="recalls-slide swiper-slide">
                  <div className="recalls-slide__box recalls-slide-box">
                    <div className="recalls-slide-box__top recalls-slide-box-top">
                      <p className="recalls-slide-box-top__text" data-aos="fade-up" data-aos-duration="1250">
                        {item.title}
                      </p>
                      <p className="recalls-slide-box-top__date" data-aos="fade-up" data-aos-duration="1500">
                        {item.date}
                      </p>
                    </div>
                    <div className="recalls-slide-box__bottom" data-aos="fade-up" data-aos-duration="1750">
                      <img
                        className="recalls-slide-box__bottom-img"
                        src={require("../../assets/images/recalls-person.png")}
                        alt="person"
                      />
                      <p className="recalls-slide-box__bottom-name">{item.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReccalsSlider;