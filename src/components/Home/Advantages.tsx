import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

const Advantages: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.advantages

  if (!translate) {
    return <></>
  }

  return (
    <section className="main__advantage main-advantage">
      <div className="container">
        <div className="main-advantage__inner">
          <h2 className="main-advantage__title title" data-aos="fade-up" data-aos-duration="500">
            {translate[prefix].title}
          </h2>
          <div className="main-advantage__wrapper">
            {
              translate[prefix].items.map((item: any, id: number) => {
                return (
                  <div key={id} className="main-advantage__box main-advantage-box">
                    <img
                      className="main-advantage-box__img"
                      src={require(`../../assets/images/advantage-icon-${id + 1}.png`)}
                      alt="img"
                      data-aos="fade-up"
                    />
                    <div className="main-advantage-box__row">
                      <p className="main-advantage-box__text" data-aos="fade-up" data-aos-duration="750">
                        {item.title}
                      </p>
                      <p className="main-advantage-box__subtext" data-aos="fade-up" data-aos-duration="1500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
