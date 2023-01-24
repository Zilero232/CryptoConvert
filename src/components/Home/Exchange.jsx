import { useState } from "react";
import { renderImage } from "../../utils/renderImage";
import Spisok from "../Exchange/Spisok";
import { useSelector } from "react-redux";

import { selectReserves } from "../../redux/reserves/selectors";
import Form from "../Exchange/Form";

const Exchange = () => {
  const { reserves } = useSelector(selectReserves);

  const [fromBts, setFromBts] = useState(0);
  const [toBts, setToBts] = useState(0);

  const [cursBts, setCursBts] = useState(20);
  const [inputFrom, setInputFrom] = useState(1);

  const resultCalc = () => {
    const curs = inputFrom * cursBts;
    return curs + (curs / 100) * 9.3;
  };

  return (
    <div className="main__exchange exchange">
      <div className="container">
        <div className="main-exchange__inner">
          <div
            className="exchange__column exchange-column exchange-column--first"
            data-aos-duration="2000"
            data-ref="container-1"
            data-aos="fade-up"
          >
            <div className="exchange-column__top exchange-column-top">
              <div className="exchange-column-top__row exchange-column-top-row">
                <p className="exchange-column-top-row__text">Отдаёте</p>
                <div className="exchange-column-top-row__box exchange-column-top-row-box">
                  <div className="exchange-column-top-row-box__wrapper">
                    <p className="exchange-column-top-row-box__wrapper-min">
                      Мин: {reserves.length && reserves[fromBts].min}
                    </p>
                    <p className="exchange-column-top-row-box__wrapper-max">
                      Макс: {reserves.length && reserves[fromBts].max}
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
                  className="exchange-column-top__info-text exchange-column-top__info-text--first"
                  type="number"
                  onInput={(e) => setInputFrom(e.target.value)}
                  value={inputFrom}
                  min={reserves.length && reserves[fromBts].min}
                  max={reserves.length && reserves[fromBts].max}
                />
                {reserves.length && renderImage("exchange-column-top__info-crypti", reserves[fromBts].imgName)}
              </div>
            </div>
            <Spisok reserves={reserves} changeId={setFromBts} id={fromBts} />
          </div>
          <div
            className="exchange__column exchange-column exchange-column--second"
            data-aos-duration="2000"
            data-ref="container-2"
            data-aos="fade-up"
          >
            <div className="exchange-column__top exchange-column-top">
              <div className="exchange-column-top__row exchange-column-top-row">
                <p className="exchange-column-top-row__text">Получите</p>
                <div className="exchange-column-top-row__box exchange-column-top-row-box">
                  <div className="exchange-column-top-row-box__wrapper">
                    <p className="exchange-column-top-row-box__wrapper-text">
                      Резевр:{" "}
                      <span className="exchange-column-top-row-box__wrapper-text--digits">
                        {reserves.length && reserves[toBts].count} {reserves.length && reserves[toBts].title}
                      </span>
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
                  value={resultCalc()}
                />
                {reserves.length && renderImage("exchange-column-top__info-crypti", reserves[toBts].imgName)}
              </div>
            </div>
            <Spisok reserves={reserves} changeId={setToBts} id={toBts} />
          </div>
          <Form
            reserves={reserves}
            cursBts={cursBts}
            fromBts={fromBts}
            toBts={toBts}
            inputFrom={inputFrom}
            resultCalc={resultCalc}
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
