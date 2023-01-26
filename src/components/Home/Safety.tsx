import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Savety = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.safety

  if (!translate) {
    return <></>
  }

  return (
    <section className="main__section-top section-top">
      <div className="container">
        <div className="section-top__inner">
          <div className="section-top__box">
            <h1 className="section-top__box-title title" data-aos="fade-up" data-aos-duration="500">
              {translate[prefix].title}
            </h1>
            <p className="section-top__box-text" data-aos="fade-up" data-aos-duration="750">
              {translate[prefix].text}
            </p>
          </div>
          <img
            className="section-top__img"
            src={require("../../assets/images/section-top-img.png")}
            alt="img"
            data-aos="fade-up"
            data-aos-duration="1250"
          />
        </div>
      </div>
    </section>
  );
};

export default Savety;
