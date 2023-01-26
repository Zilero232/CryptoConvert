import { FC } from 'react'
import { useSelector } from "react-redux";
import RenderSvg from '../components/Partners/RenderSvg';
import { RootState } from '../redux/store';

const ForPartners: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.partners

  if (!translate) {
    return <></>
  }

  return (
    <div className="main-layout">
      <main className="main main-for-partners">
        <section className="main__for-partners for-partners">
          <div className="container-smallest">
            <div className="for-partners__top for-partners-top" data-aos="fade-up" data-aos-duration="500">
              <h1 className="for-partners-top__title">{translate[prefix].title}</h1>
              <button className="for-partners-top__btn" type="button">
                <span>{translate[prefix].btn}</span>
              </button>
            </div>
            <div className="for-partners__bottom for-partners-bottom">
              {
                translate[prefix].items.map((item: any, id: number) => {
                  return (
                    <div key={id} className="for-partners-bottom__item for-partners-bottom-item">
                      <div className="for-partners-bottom-item__box">
                        <RenderSvg id={id} />
                      </div>
                      <div className="for-partners-bottom-item__column">
                        <p className="for-partners-bottom-item__column-suptext" data-aos="fade-up" data-aos-duration="1000">
                          {item.tag}
                        </p>
                        <h3 className="for-partners-bottom-item__column-title" data-aos="fade-up" data-aos-duration="1500">
                          {item.title}
                        </h3>
                        <p className="for-partners-bottom-item__column-text" data-aos="fade-up" data-aos-duration="2000">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForPartners;
