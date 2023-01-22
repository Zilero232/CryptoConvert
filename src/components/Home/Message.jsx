const Message = () => {
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
              Сайт работает в автоматическом режиме.
            </p>
          </div>
          <p className="main-message__text" data-aos="fade-up" data-aos-duration="2000">
            <span className="main-message__text--desc">Сайт работает в автоматическом режиме.</span> <br />
            Служба поддержки клиентов находится ОНЛАЙН ежедневно с{" "}
            <span className="main-message__text--white">10:00 до</span>{" "}
            <span className="main-message__text--white">23:00</span>{" "}
            <span className="main-message__text--white">UTC+3.</span> <br />
            Если Вы осуществляете обмен с <span className="main-message__text--white">23:00</span> до{" "}
            <span className="main-message__text--white">10:00</span> и Вам необходима помощь консультанта, просим
            подождать,
            <br className="br-act" />
            <br />
            когда консультант будет ОНЛАЙН. <br />
            <span className="main-message__text--desc"> Спасибо за понимание.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
