import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import useAppendHTML from '../utils/useAppendHTML';

const About: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.about

  return (
    <main className="main main-about">
      <section className="main__section-top section-top">
        <div className="container">
          <div className="section-top__inner">
            <div className="section-top__box">
              <h1 className="section-top__box-title title" data-aos="fade-up" data-aos-duration="500">
                {translate[prefix].title}
              </h1>
              <p className="section-top__box-text" data-aos="fade-up" data-aos-duration="1000">
                {translate[prefix].text}
              </p>
            </div>
            <img
              className="section-top__img"
              src={require("../assets/images/section-top-img.png")}
              alt="img"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </section>
      <div className="main__text main-text">
        <div className="container">
          <div className="main-text__inner">
            <div className="main-text__text" data-aos="fade-up" data-aos-duration="2500">
              {useAppendHTML(translate[prefix].service)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
