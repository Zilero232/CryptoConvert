const Reserves = () => {
  return (
    <section className="main__reserves main-reserves">
      <div className="container">
        <div className="main-reserves__wrapper">
          <h2 className="main-reserves__title title" data-aos="fade-up" data-aos-duration="500">
            Наши резервы
          </h2>
          <div className="main-reserves__inner">
            <ul className="main-reserves__list main-reserves-list">
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-1.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="1">
                      Bitcoin
                    </span>{" "}
                    BTC
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="1">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="1">
                    BTC
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="1">
                  Мин: 0.0870012345
                </span>
                <span className="main-reserves-list__item-span--max" id="1">
                  Макс: 10240.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-2.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="2">
                      Ethereum
                    </span>{" "}
                    ETH
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="2">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="2">
                    ETH
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="2">
                  Мин: 0.006012345
                </span>
                <span className="main-reserves-list__item-span--max" id="2">
                  Макс: 100.500
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-3.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="3">
                      Binance
                    </span>{" "}
                    Smart Chain BNB
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="3">
                    42006.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="3">
                    BNB
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="3">
                  Мин: 0.0005312345
                </span>
                <span className="main-reserves-list__item-span--max" id="3">
                  Макс: 1050.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-4.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="4">
                      Binance
                    </span>{" "}
                    Beacon Chain BNB
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="4">
                    42008.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="4">
                    BNB
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="4">
                  Мин: 0.0056012345
                </span>
                <span className="main-reserves-list__item-span--max" id="4">
                  Макс: 1002.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-5.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="5">
                      Litecoin
                    </span>{" "}
                    LTC
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="5">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="5">
                    LTC
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="5">
                  Мин: 0.0033012345
                </span>
                <span className="main-reserves-list__item-span--max" id="5">
                  Макс: 1050.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-6.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="6">
                      Ripple
                    </span>{" "}
                    XRP
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="6">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="6">
                    XRP
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="6">
                  Мин: 0.00546012345
                </span>
                <span className="main-reserves-list__item-span--max" id="6">
                  Макс: 1400.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-7.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="7">
                      Dash
                    </span>{" "}
                    DASH
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="7">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="7">
                    DASH
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="7">
                  Мин: 0.0660012345
                </span>
                <span className="main-reserves-list__item-span--max" id="7">
                  Макс: 1070.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-8.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="8">
                      Cardano
                    </span>{" "}
                    ADA
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="8">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="8">
                    ADA
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="8">
                  Мин: 0.0001622345
                </span>
                <span className="main-reserves-list__item-span--max" id="8">
                  Макс: 10250.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-9.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    {" "}
                    <span className="main-reserves-list__box-text--ourspannn" id="9">
                      Dogecoin
                    </span>{" "}
                    DOGE
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="9">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="9">
                    DOGE
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="9">
                  Мин: 0.0005312345
                </span>
                <span className="main-reserves-list__item-span--max" id="9">
                  Макс: 1060.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-10.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="10">
                      Polkadot
                    </span>{" "}
                    DOT
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="10">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="10">
                    DOT
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="10">
                  Мин: 0.000152345
                </span>
                <span className="main-reserves-list__item-span--max" id="10">
                  Макс: 1070.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-11.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="11">
                      TRON
                    </span>{" "}
                    TRX
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="11">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="11">
                    TRX
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="11">
                  Мин: 0.0006512345
                </span>
                <span className="main-reserves-list__item-span--max" id="11">
                  Макс: 10250.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-12.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="12">
                      Tezos
                    </span>{" "}
                    XTZ
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="12">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="12">
                    XTZ
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="12">
                  Мин: 0.0025012345
                </span>
                <span className="main-reserves-list__item-span--max" id="12">
                  Макс: 10024.00
                </span>
              </li>
            </ul>
            <ul className="main-reserves__list main-reserves-list">
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-13.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="13">
                      Avalanche
                    </span>{" "}
                    AVAX
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="13">
                    42003.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="13">
                    AVAX
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="13">
                  Мин: 0.0025012345
                </span>
                <span className="main-reserves-list__item-span--max" id="13">
                  Макс: 1040.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-14.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="14">
                      Zcash
                    </span>{" "}
                    ZEC
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="14">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="14">
                    ZEC
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="14">
                  Мин: 0.0045012345
                </span>
                <span className="main-reserves-list__item-span--max" id="14">
                  Макс: 10520.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-15.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="15">
                      Polygon
                    </span>{" "}
                    MATIC
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="15">
                    42005.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="15">
                    MATIC
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="15">
                  Мин: 0.0041012345
                </span>
                <span className="main-reserves-list__item-span--max" id="15">
                  Макс: 10240.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-16.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="16">
                      Solana
                    </span>{" "}
                    SOL
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="16">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="16">
                    SOL
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="16">
                  Мин: 0.0025012345
                </span>
                <span className="main-reserves-list__item-span--max" id="16">
                  Макс: 10021.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-17.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="17">
                      Tether
                    </span>{" "}
                    USDT ERC-20
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="17">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="17">
                    ERC-20
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="17">
                  Мин: 0.0006312345
                </span>
                <span className="main-reserves-list__item-span--max" id="17">
                  Макс: 1002.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-18.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="18">
                      Tether
                    </span>{" "}
                    USDT TRC-20
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="18">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="18">
                    TRC-20
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="18">
                  Мин: 0.03512345
                </span>
                <span className="main-reserves-list__item-span--max" id="18">
                  Макс: 1340.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-19.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="19">
                      TONCOIN
                    </span>{" "}
                    ERC-20
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="19">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="19">
                    ERC-20
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="19">
                  Мин: 0.043012345
                </span>
                <span className="main-reserves-list__item-span--max" id="19">
                  Макс: 20.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-20.png")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="20">
                      TWT
                    </span>{" "}
                    BEP-2
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="20">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="20">
                    BEP-2
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="20">
                  Мин: 0.0004212345
                </span>
                <span className="main-reserves-list__item-span--max" id="20">
                  Макс: 1002.00
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-21.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="21">
                      Visa/Mastercard
                    </span>{" "}
                    USD
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="21">
                    42002.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="21">
                    USD
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="21">
                  Мин: 0.000345
                </span>
                <span className="main-reserves-list__item-span--max" id="21">
                  Макс: 100.002
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-21.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="22">
                      Visa/Mastercard
                    </span>{" "}
                    EUR
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="22">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="22">
                    EUR
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="22">
                  Мин: 0.000123
                </span>
                <span className="main-reserves-list__item-span--max" id="22">
                  Макс: 100.005
                </span>
              </li>
              <li className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                <div className="main-reserves-list__box">
                  <img
                    className="main-reserves-list__box-img"
                    src={require("../../assets/images/reserves-icon-21.svg")}
                    alt="active-arrow"
                  />
                  <p className="main-reserves-list__box-text">
                    <span className="main-reserves-list__box-text--ourspannn" id="23">
                      Visa/Mastercard
                    </span>{" "}
                    KZT
                  </p>
                </div>
                <p className="main-reserves-list__price">
                  <span className="main-reserves-list__price-digit" id="23">
                    42004.00
                  </span>
                  <span className="main-reserves-list__price-digit-text" id="23">
                    KZT
                  </span>
                </p>
                <span className="main-reserves-list__item-span--min" id="23">
                  Мин: 0.0001224
                </span>
                <span className="main-reserves-list__item-span--max" id="23">
                  Макс: 100.002
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserves;
