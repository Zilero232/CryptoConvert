import { useState, ChangeEvent, useEffect } from "react";
import { renderImage } from "../../utils/renderImage";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { fetchCurs } from "../../redux/curs/asyncActions";
import { selectReserves } from "../../redux/reserves/selectors";
import Form from "../Exchange/Form";
import Spisok from "../Exchange/Spisok";


const Exchange = () => {
  const dispatch = useAppDispatch()
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.form

  const { reserves } = useSelector(selectReserves);
  const { curs } = useSelector((state: RootState) => state.curs);
  const [fromBts, setFromBts] = useState(0);
  const [toBts, setToBts] = useState(0);
  const [cursBts, setCursBts] = useState(20);
  const [inputFrom, setInputFrom] = useState(1);

  useEffect(() => {
    if (reserves.length)
      dispatch(fetchCurs({ from: reserves[fromBts].value, to: reserves[toBts].value }))
  }, [fromBts, toBts])

  const resultCalc = () => {
    const value = Number(Object.values(curs)[0])
    const res = inputFrom * value;
    return String((res + (res / 100) * 9.3).toFixed(5));
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.slice(0, 5)
    setInputFrom(Number(e.target.value))
  }


  if (!translate && prefix) {
    return <></>
  }

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
                      {translate[prefix].min}: {reserves[fromBts].min}
                    </p>
                    <p className="exchange-column-top-row-box__wrapper-max">
                      {translate[prefix].max}: {reserves[fromBts].max}
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
                  onChange={onChangeInput}
                  value={inputFrom}
                  min={reserves[fromBts].min}
                  max={reserves[fromBts].max}
                />
                {renderImage("exchange-column-top__info-crypti", reserves[fromBts].imgName)}
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
                      {translate[prefix].count}:{" "}
                      <span className="exchange-column-top-row-box__wrapper-text--digits">
                        {reserves[toBts].count} {reserves[toBts].title}
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
                {renderImage("exchange-column-top__info-crypti", reserves[toBts].imgName)}
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
            translate={translate}
            prefix={prefix}
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
