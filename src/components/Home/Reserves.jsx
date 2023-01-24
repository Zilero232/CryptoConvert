import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectReserves } from "../../redux/reserves/selectors";
import { fetchReserves } from "../../redux/reserves/asyncActions";
import { renderImage } from "../../utils/renderImage";

const Reserves = () => {
  const dispatch = useDispatch();
  const { reserves } = useSelector(selectReserves);

  useEffect(() => {
    dispatch(fetchReserves());
  }, []);

  return (
    <section className="main__reserves main-reserves">
      <div className="container">
        <div className="main-reserves__wrapper">
          <h2 className="main-reserves__title title" data-aos="fade-up" data-aos-duration="500">
            Наши резервы
          </h2>
          <div className="main-reserves__inner">
            <ul className="main-reserves__list main-reserves-list">
              {reserves.map((item, idx) => {
                return (
                  <li key={idx} className="main-reserves-list__item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="main-reserves-list__box">
                      {renderImage("", item.imgName)}
                      <p className="main-reserves-list__box-text">
                        <span className="main-reserves-list__box-text--ourspannn">{item.title} </span>
                        {item.value}
                      </p>
                    </div>
                    <p className="main-reserves-list__price">
                      <span className="main-reserves-list__price-digit">{item.count} </span>
                      <span className="main-reserves-list__price-digit-text">{item.value}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserves;
