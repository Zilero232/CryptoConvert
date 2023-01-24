import { useState } from "react";
import { renderImage } from "../../utils/renderImage";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Form = ({ reserves, fromBts, cursBts, inputFrom, toBts, resultCalc }) => {
  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState({
    bank: "",
    email: "",
  });

  const Submit = (e) => {
    e.preventDefault();
    
    
  };

  return (
    <div className="exchange__data exchange-data" data-aos-duration="2000" data-aos="fade-up">
      <div className="exchange-data__top exchange-data-top">
        <p className="exchange-data-top__text">Ввод данных</p>
        <div className="exchange-data-top__info">
          <p className="exchange-data-top__info-text">
            Курс: <span>1/{cursBts}</span>
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
            {reserves.length &&
              renderImage(
                "exchange-data-box-item__row-img exchange-data-box-item__row-img--first",
                reserves[fromBts].imgName
              )}
            <p className="exchange-data-box-item__row-text exchange-data-box-item__row-text--first">
              {reserves.length && reserves[fromBts].title}
            </p>
          </div>
          <div className="exchange-data-box-item__info">
            <p className="exchange-data-box-item__info-text exchange-data-box-item__info-text--first">
              {inputFrom}{" "}
              <span className="exchange-data-box-item__info-text--spfirst">
                {reserves.length && reserves[fromBts].value}
              </span>
            </p>
            <img
              className="exchange-data-box-item__info-img"
              src={require("../../assets/images/exchange-arrow.png")}
              alt="arrow"
            />
          </div>
        </div>
        <div className="exchange-data-box__middle exchange-data-box-middle">
          <img
            className="exchange-data-box-middle__img one"
            src={require("../../assets/images/exchange-middle-img-2.png")}
            alt="icon"
            style={{ width: "30px", height: "30px" }}
          />
          {renderImage("exchange-data-box-middle__img line-1", "exchange-middle-img-1.svg")}
          {renderImage("exchange-data-box-middle__img line-2", "exchange-middle-img-1.svg")}
        </div>
        <div className="exchange-data-box__item exchange-data-box-item">
          <div className="exchange-data-box-item__row">
            {reserves.length &&
              renderImage(
                "exchange-data-box-item__row-img exchange-data-box-item__row-img--second",
                reserves[toBts].imgName
              )}
            <p className="exchange-data-box-item__row-text exchange-data-box-item__row-text--second">Ethereum</p>
          </div>
          <div className="exchange-data-box-item__info">
            <p className="exchange-data-box-item__info-text">
              {resultCalc()}{" "}
              <span className="exchange-data-box-item__info-text--spsecond">
                {reserves.length && reserves[toBts].value}
              </span>
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
      <form onSubmit={Submit} className="exchange-data__form exchange-data-form" action="#">
      <Button variant="contained">Hello World</Button>;
        <p className="exchange-data-form__text">Заполни форму</p>
        <div className="exchange-data-form__box">
          <input
            className="exchange-data-form__box-input exchange-data-form__box-input--first"
            type="text"
            placeholder="Ethereum адрес"
            value={form.bank}
            onInput={(e) => setForm({ ...form, bank: e.target.value })}
          />
          {renderImage("exchange-data-form__box-img", "reserves-icon-2.svg")}
        </div>
        <div className="exchange-data-form__box">
          <input
            className="exchange-data-form__box-input"
            type="text"
            placeholder="E-mail"
            value={form.email}
            onInput={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="exchange-data-form__consent">
          <label className="container">
            <input type="checkbox" defaultChecked={checked} value={checked} onChange={() => setChecked(!checked)} />
            <span className="checkmark"></span>
          </label>
          <p className="exchange-data-form__consent-text">
            Я согласен с условиями и <Link to="/about">правилами сервиса</Link>.
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
          AML-проверка Вашей транзакции. <br />В случае, если Ваш адрес или криптовалюта, отправленная Вами, будет иметь
          High Risk/Middle Risk или связана с нелегитимными источниками — будет проводиться проверка личности.
        </p>
      </div>
    </div>
  );
};

export default Form;
