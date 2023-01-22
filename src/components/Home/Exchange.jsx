import exchangeMiddleImg1 from "../../assets/images/exchange-middle-img-1.svg";
import reservesIcon1 from "../../assets/images/reserves-icon-1.svg";
import reservesIcon2 from "../../assets/images/reserves-icon-2.svg";
import reservesIcon17 from "../../assets/images/reserves-icon-17.svg";
import reservesIcon18 from "../../assets/images/reserves-icon-18.svg";
import reservesIcon21 from "../../assets/images/reserves-icon-21.svg";

const Exchange = () => {
  return (
    <div className="main__exchange exchange">
      <div className="container">
        <div className="main-exchange__inner">
          <div
            className="exchange__column exchange-column exchange-column--first"
            data-aos-duration="2000"
            data-ref="container-1"
            id="1"
            data-aos="fade-up"
          >
            <div className="exchange-column__top exchange-column-top">
              <div className="exchange-column-top__row exchange-column-top-row">
                <p className="exchange-column-top-row__text">Отдаёте</p>
                <div className="exchange-column-top-row__box exchange-column-top-row-box">
                  <div className="exchange-column-top-row-box__wrapper">
                    <p className="exchange-column-top-row-box__wrapper-min">Мин: 0.00012345</p>
                    <p className="exchange-column-top-row-box__wrapper-max">Макс: 100.00</p>
                  </div>
                  <img
                    className="exchange-column-top-row-box__img"
                    src={require("../../assets/images/exchange-arrow.png")}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="exchange-column-top__info">
                <input
                  className="exchange-column-top__info-text exchange-column-top__info-text--first"
                  type="number"
                  placeholder="1"
                />
                <img
                  className="exchange-column-top__info-crypti"
                  src={reservesIcon1}
                  alt=""
                />
              </div>
            </div>
            <div className="exchange-column__buttons">
              <button className="exchange-column__buttons-btn" data-filter=".item-first" type="button">
                Все
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-second" type="button">
                USD
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-third" type="button">
                Coins
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-fourth" type="button">
                Tokens
              </button>
            </div>
            <div className="exchange-column__wrapper">
              <ul className="exchange-column__list exchange-column-list mix item-first">
                <li className="exchange-column-list__item exchange-column-list__item--active" id="1">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon1}
                      alt="icon"
                    />
                    <p className="exchange-column-list__box-text">Bitcoin BTC</p>
                  </div>
                  <img
                    className="exchange-column-list__active exchange-column-list__active--active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item exchange-column-list__item--disabled" id="2">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon2}
                      alt="icon"
                    />
                    <p className="exchange-column-list__box-text">Ethereum ETH</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="3">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-3.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Binance Smart Chain BNB</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="4">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-4.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Binance Beacon Chain BNB</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="5">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-5.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Litecoin LTC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="6">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-6.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Ripple XRP</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="7">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-7.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Dash DASH</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="8">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-8.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Cardano ADA</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="9">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-9.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Dogecoin DOGE</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="10">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-10.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Polkadot DOT</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="11">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-11.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TRON TRX</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="12">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-12.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tezos XTZ</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="13">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-13.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Avalanche AVAX</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="14">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-14.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Zcash ZEC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="15">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-15.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Polygon MATIC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="16">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-16.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Solana SOL</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="17">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon17}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tether USDT ERC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="18">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon18}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tether USDT TRC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="19">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-19.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TONCOIN ERC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="20">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-20.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TWT BEP-2</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="exchange__column exchange-column exchange-column--second"
            data-aos-duration="2000"
            data-ref="container-2"
            id="2"
            data-aos="fade-up"
          >
            <div className="exchange-column__top exchange-column-top">
              <div className="exchange-column-top__row exchange-column-top-row">
                <p className="exchange-column-top-row__text">Получите</p>
                <div className="exchange-column-top-row__box exchange-column-top-row-box">
                  <div className="exchange-column-top-row-box__wrapper">
                    <p className="exchange-column-top-row-box__wrapper-text">
                      Резевр:
                      <span className="exchange-column-top-row-box__wrapper-text--digits">4204.00 ETH</span>
                    </p>
                  </div>
                  <img
                    className="exchange-column-top-row-box__img"
                    src={require("../../assets/images/exchange-arrow.png")}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="exchange-column-top__info">
                <input
                  className="exchange-column-top__info-text exchange-column-top__info-text--second"
                  type="number"
                  disabled
                  placeholder="11.389081"
                />
                <img
                  className="exchange-column-top__info-crypti"
                  src={reservesIcon2}
                  alt=""
                />
              </div>
            </div>
            <div className="exchange-column__buttons">
              <button className="exchange-column__buttons-btn" data-filter=".item-first" type="button">
                Все
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-second" type="button">
                USD
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-third" type="button">
                Coins
              </button>
              <button className="exchange-column__buttons-btn" data-filter=".item-fourth" type="button">
                Tokens
              </button>
            </div>
            <div className="exchange-column__wrapper">
              <ul className="exchange-column__list exchange-column-list mix item-first">
                <li
                  className="exchange-column-list__item exchange-column-list__item--disabled exchange-column-list__item--first"
                  id="1"
                >
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon1}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Bitcoin BTC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item exchange-column-list__item--active" id="2">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon2}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Ethereum ETH</p>
                  </div>
                  <img
                    className="exchange-column-list__active exchange-column-list__active--active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="3">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-3.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Binance Smart Chain BNB</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="4">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-4.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Binance Beacon Chain BNB</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="5">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-5.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Litecoin LTC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="6">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-6.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Ripple XRP</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="7">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-7.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Dash DASH</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="8">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-8.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Cardano ADA</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="9">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-9.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Dogecoin DOGE</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="10">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-10.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Polkadot DOT</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="11">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-11.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TRON TRX</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="12">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-12.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tezos XTZ</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="13">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-13.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Avalanche AVAX</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="14">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-14.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Zcash ZEC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="15">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-15.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Polygon MATIC</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="16">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-16.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Solana SOL</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="17">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon17}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tether USDT ERC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="18">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon18}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Tether USDT TRC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="19">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-19.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TONCOIN ERC-20</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="20">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={require("../../assets/images/reserves-icon-20.png")}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">TWT BEP-2</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="21">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon21}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Visa/Mastercard USD</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="22">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon21}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Visa/Mastercard EUR</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
                <li className="exchange-column-list__item" id="23">
                  <div className="exchange-column-list__box">
                    <img
                      className="exchange-column-list__box-img"
                      src={reservesIcon21}
                      alt="active-arrow"
                    />
                    <p className="exchange-column-list__box-text">Visa/Mastercard KZT</p>
                  </div>
                  <img
                    className="exchange-column-list__active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="exchange__data exchange-data" data-aos-duration="2000" data-aos="fade-up">
            <div className="exchange-data__top exchange-data-top">
              <p className="exchange-data-top__text">Ввод данных</p>
              <div className="exchange-data-top__info">
                <p className="exchange-data-top__info-text">
                  Курс:
                  <span>1/12.88</span>
                </p>
                <svg
                  className="exchange-data-top__info-img"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="mask0_1_544" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="url(#pattern0)" />
                  </mask>
                  <g mask="url(#mask0_1_544)">
                    <rect
                      x="20"
                      y="20"
                      width="20"
                      height="20"
                      transform="rotate(-180 20 20)"
                      fill="url(#paint0_linear_1_544)"
                    />
                  </g>
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use transform="scale(0.00195312)" />
                    </pattern>
                    <linearGradient
                      id="paint0_linear_1_544"
                      x1="39.9912"
                      y1="21.4998"
                      x2="21.9912"
                      y2="37.4998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00D1FF" />
                      <stop offset="1" stopColor="#DB00FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="exchange-data__box exchange-data-box">
              <div className="exchange-data-box__item exchange-data-box-item">
                <div className="exchange-data-box-item__row">
                  <img
                    className="exchange-data-box-item__row-img exchange-data-box-item__row-img--first"
                    src={reservesIcon1}
                    alt="active-arrow"
                  />
                  <p className="exchange-data-box-item__row-text exchange-data-box-item__row-text--first">Bitcoin</p>
                </div>
                <div className="exchange-data-box-item__info">
                  <p className="exchange-data-box-item__info-text exchange-data-box-item__info-text--first">
                    1<span className="exchange-data-box-item__info-text--spfirst">BTC</span>
                  </p>
                  <img
                    className="exchange-data-box-item__info-img"
                    src={require("../../assets/images/exchange-arrow.png")}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="exchange-data-box__middle exchange-data-box-middle">
                <img className="exchange-data-box-middle__img" src={exchangeMiddleImg1} alt="active-arrow" />
                <img
                  className="exchange-data-box-middle__img"
                  src={require("../../assets/images/exchange-middle-img-2.png")}
                  alt="icon"
                  style={{ width: "30px", height: "30px" }}
                />
                <img className="exchange-data-box-middle__img" src={exchangeMiddleImg1} alt="active-arrow" />
              </div>
              <div className="exchange-data-box__item exchange-data-box-item">
                <div className="exchange-data-box-item__row">
                  <img
                    className="exchange-data-box-item__row-img exchange-data-box-item__row-img--second"
                    src={reservesIcon2}
                    alt="active-arrow"
                  />
                  <p className="exchange-data-box-item__row-text exchange-data-box-item__row-text--second">Ethereum</p>
                </div>
                <div className="exchange-data-box-item__info">
                  <p className="exchange-data-box-item__info-text">
                    11.389081
                    <span className="exchange-data-box-item__info-text--spsecond">ETH</span>
                  </p>
                  <img
                    className="exchange-data-box-item__info-img"
                    src={require("../../assets/images/exchange-arrow.png")}
                    alt="arrow"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </div>
              </div>
            </div>
            <form className="exchange-data__form exchange-data-form" action="#">
              <p className="exchange-data-form__text">Заполни форму</p>
              <div className="exchange-data-form__box">
                <input
                  className="exchange-data-form__box-input exchange-data-form__box-input--first"
                  type="text"
                  placeholder="Ethereum адрес"
                />
                <img
                  className="exchange-data-form__box-img"
                  src={reservesIcon2}
                  alt="active-arrow"
                />
              </div>
              <div className="exchange-data-form__box">
                <input className="exchange-data-form__box-input" type="text" placeholder="E-mail" />
              </div>
              <div className="exchange-data-form__consent">
                <label className="container">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="checkmark"></span>
                </label>
                <p className="exchange-data-form__consent-text">
                  Я согласен с условиями и<a href="/">правилами сервиса</a>.
                </p>
              </div>
              <button className="exchange-data-form__btn" type="submit">
                Обменять сейчас
              </button>
            </form>
            <div className="exchange-data__bottom exchange-data-bottom">
              <p className="exchange-data-bottom__text">
                Данная операция происходит в автоматическом режиме 24/7 и занимает до 15-ти минут
                <span>после получения 2-го подтверждения транзакции</span>.
              </p>
              <p className="exchange-data-bottom__text">
                <span>Внимание!</span> Будет проведена <br />
                AML-проверка Вашей транзакции. <br />В случае, если Ваш адрес или криптовалюта, отправленная Вами, будет
                иметь High Risk/Middle Risk или связана с нелегитимными источниками — будет проводиться проверка
                личности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
