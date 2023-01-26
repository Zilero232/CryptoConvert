import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import useAppendHTML from '../utils/useAppendHTML';

const Rules: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.rules

  return (
    <main className="main main-rules">
      <section className="main__section-top section-top">
        <div className="container">
          <div className="section-top__inner">
            <div className="section-top__box">
              <h1 className="section-top__box-title title" data-aos="fade-up" data-aos-duration="500">
                {translate[prefix].title}
              </h1>
              <p className="section-top__box-text" data-aos="fade-up" data-aos-duration="1000">
                {translate[prefix].date}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="main__text main-text" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <div className="main-text__inner">
            <p className="main-text__text">
              {useAppendHTML(translate[prefix].text)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rules;
