import { FC } from 'react'
import { Reserv } from '../../redux/reserves/slice';
import { renderImage } from "../../utils/renderImage";

const btnsFilter = [
  {
    title: "Все",
    filter: "all",
  },
  {
    title: "USD",
    filter: "USD",
  },
  {
    title: "Coins",
    filter: "Coins",
  },
  {
    title: "Tokens",
    filter: "Tokens",
  },
];

type SpisokTs = {
  reserves: Reserv[],
  changeId: (id: number) => void,
  id: number
}

const Spisok: FC<SpisokTs> = ({ reserves, changeId, id }) => {
  return (
    <>
      <div className="exchange-column__buttons">
        {btnsFilter.map((btn, idx) => {
          return (
            <button key={idx} className="exchange-column__buttons-btn" type="button">
              {btn.title}
            </button>
          );
        })}
      </div>
      <div className="exchange-column__wrapper">
        <ul className="exchange-column__list exchange-column-list mix item-first">
          {reserves &&
            reserves.map((item, idx) => {
              return (
                <li
                  onClick={() => changeId(idx)}
                  key={idx}
                  className={`exchange-column-list__item ${id === idx ? "exchange-column-list__item--active" : ""}`}
                >
                  <div className="exchange-column-list__box">
                    {renderImage("exchange-column-list__box-img", item.imgName)}
                    <p className="exchange-column-list__box-text">
                      {item.title} {item.value}
                    </p>
                  </div>
                  <img
                    className="exchange-column-list__active exchange-column-list__active--active"
                    src={require("../../assets/images/exchange-active-arronw.png")}
                    alt="active-arrow"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Spisok;
