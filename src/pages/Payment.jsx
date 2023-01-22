const Payment = () => {
  return (
    <main className="main main-payment">
      <section className="main__payment payment">
        <div className="container">
          <div className="payment__inner">
            <div className="payment__box payment-box">
              <h1 className="payment-box__title title" data-aos="fade-up" data-aos-duration="500">
                Ожидание оплаты
              </h1>
              <div className="payment-box__item payment-box-item">
                <p className="payment-box-item__text" data-aos="fade-up" data-aos-duration="750">
                  Переведите 1.781567355 BTC
                </p>
                <div className="payment-box-item__box">
                  <input
                    value="1.781567355"
                    className="payment-box-item__box-text payment-box-item__box-text--first"
                    data-aos="fade-up"
                    data-aos-duration="750"
                    id="myin1"
                  />
                  <button
                    className="payment-box-item__box-button"
                    type="button"
                    data-aos="fade-up"
                    data-aos-duration="750"
                  >
                    <img
                      className="payment-box-item__box-button-img payment-box-item__box-button--first"
                      src={require("../assets/images/payment-copy-icon.png")}
                      alt="copy-icon"
                    />
                  </button>
                </div>
              </div>
              <div className="payment-box__item payment-box-item">
                <p className="payment-box-item__text" data-aos="fade-up" data-aos-duration="1250">
                  На кошелёк
                </p>
                <div className="payment-box-item__box">
                  <input
                    value="bc1qm3pe5u723p79828qcr0t6sr2dq0ng3l28l4q5v"
                    className="payment-box-item__box-text payment-box-item__box-text--second"
                    data-aos="fade-up"
                    data-aos-duration="1250"
                    id="myin2"
                  />
                  <button
                    className="payment-box-item__box-button"
                    type="button"
                    data-aos="fade-up"
                    data-aos-duration="1250"
                  >
                    <img
                      className="payment-box-item__box-button-img payment-box-item__box-button-img--second"
                      src={require("../assets/images/payment-copy-icon.png")}
                      alt="copy-icon"
                    />
                  </button>
                </div>
              </div>
              <div className="payment-box__item payment-box-item">
                <p className="payment-box-item__text" data-aos="fade-up" data-aos-duration="1750">
                  Выберите сеть
                </p>
                <div className="payment-box-item__box">
                  <p className="payment-box-item__box-text" data-aos="fade-up" data-aos-duration="1750">
                    Bitcoin
                  </p>
                </div>
              </div>
              <a className="payment-box__link" href="/" data-aos="fade-up">
                #lUZFNRF30f
              </a>
            </div>
            <div className="payment__column">
              <h2 className="payment__column-title" data-aos="fade-up">
                QR-код
              </h2>
              <img
                className="payment__column-img"
                src={require("../assets/images/payment-qr.png")}
                alt="picture"
                data-aos="fade-up"
              />
              <a className="payment-box__link payment-box__link-column" href="/" style={{ display: "none" }}>
                #lUZFNRF30f
              </a>
            </div>
          </div>
          <div className="payment__row payment-row" data-aos="fade-up">
            <div className="payment-row__box payment-row-box">
              <div className="payment-row-box__item">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.6788 7.32123C32.9155 -2.44041 17.0845 -2.44041 7.32123 7.32123C-2.44041 17.0845 -2.44041 32.9155 7.32123 42.6788C17.0845 52.4404 32.9155 52.4404 42.6788 42.6788C52.4404 32.9155 52.4404 17.0845 42.6788 7.32123ZM35.1721 37.249C33.1528 36.0836 22.2126 29.7803 22.2126 29.7803H22.1154C22.1154 29.7803 22.1154 11.5312 22.1154 9.01081C22.1154 6.49046 26.0714 6.3998 26.0714 9.01081C26.0714 11.6218 26.0714 27.4116 26.0714 27.4116C26.0714 27.4116 34.6941 32.3056 37.1501 33.8091C39.6064 35.3122 37.1913 38.4161 35.1721 37.249Z"
                    fill="url(#paint0_linear_119_105)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_119_105"
                      x1="47"
                      y1="11.5"
                      x2="30.6476"
                      y2="47.1132"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.285118" stopColor="#6FA0FF" />
                      <stop offset="1" stopColor="#D868FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="payment-row-box__item-time">30:00</p>
              </div>
              <p className="payment-row-box__text">Оставшееся время для оплаты</p>
            </div>
            <form className="payment-row__form" action="#">
              <button className="payment-row__form-done" type="submit">
                Я оплатил
              </button>
              <button className="payment-row__form-cancel" type="submit">
                Отмена
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
