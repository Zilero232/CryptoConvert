import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

const Message: FC = () => {
  const { languages, prefix } = useSelector((state: RootState) => state.language);
  const translate = languages.auto

  if (!translate) {
    return <></>
  }

  return (
    <div className="main__message main-message" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <div className="main-message__inner">
          <div className="main-message__box">
            <img
              className="main-message__box-img"
              src={require("../../assets/images/message-icon.png")}
              alt=""
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <p
              style={{ display: "none" }}
              className="main-message__box-text"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {translate[prefix].title}
            </p>
          </div>
          <p className="main-message__text" data-aos="fade-up" data-aos-duration="2000">
            {translate[prefix].text} <br />
            <span className="main-message__text--desc">{translate[prefix].gratitude}.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
