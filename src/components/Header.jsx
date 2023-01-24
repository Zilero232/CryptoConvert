import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { languages } = useSelector((state) => state.language);
  const [isOpenLanguage, setOpenLanguage] = useState(false);
  const [isActiveLanguage, setActiveLanguage] = useState("ru");

  return (
    <header data-aos="fade-bottom" id="header" className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo logo" to="/">
            <img className="logo-img" src={require("../assets/images/logo.png")} alt="logo" />
          </Link>
          <div className="header__wrapper">
            <svg
              className="header__mobile-bg"
              width="390"
              height="324"
              viewBox="0 0 390 324"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_3152)">
                <path
                  d="M382.917 47.1994L391.42 93.641L415.522 107.475L490.877 109.167L504.358 136.434L565 158.222L491.097 187.909L523.234 206.356L488.289 232.866L416.925 243.481L443.438 277.727L335.208 347.299L240.303 292.825L197.136 300.095L127.841 260.321L117.23 231.696L11.3666 204.482L10.225 179.791L70.0183 151.519L77.9648 122.53L154.207 111.712L206.347 87.0584L181.483 56.7631L261.366 18.992L382.917 47.1994Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M294.125 166.129L307.091 169.123L318.59 175.724L318.575 184.128L310.628 190.069L313.443 193.721L301.852 201.161L291.744 195.359L278.631 188.851L267.34 185.959L267.23 183.324L273.628 180.299L288.217 173.401L285.576 170.17L294.125 166.129Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M376.749 56.3857L385.096 99.3702L408.23 112.648L477.787 114.533L490.23 140.025L545.903 160.366L477.378 187.998L507.26 205.307L474.556 230.064L408.237 240.148L432.321 271.537L332.028 335.534L243.92 285L203.569 291.46L138.736 254.523L128.936 227.999L31.2116 202.777L30.4039 179.869L85.8438 153.655L94.3016 126.366L164.577 116.255L212.604 93.3746L189.982 65.254L264.05 30.2328L376.749 56.3857Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M370.581 65.572L378.773 105.099L400.936 117.821L464.697 119.898L476.103 143.617L526.804 162.51L463.659 188.087L491.285 204.257L460.824 227.262L399.548 236.815L421.205 265.347L328.848 323.769L247.535 277.175L210 282.826L149.629 248.726L140.642 224.303L51.0566 201.072L50.5828 179.947L101.669 155.792L110.638 130.202L174.948 120.799L218.862 99.6904L198.481 73.7453L266.733 41.4736L370.581 65.572Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M364.413 74.7583L372.45 110.828L393.644 122.993L451.607 125.264L461.976 147.208L507.707 164.654L449.941 188.176L475.311 203.208L447.092 224.459L390.86 233.483L410.088 259.157L325.668 312.004L251.152 269.35L216.433 274.191L160.524 242.928L152.348 220.606L70.9028 199.367L70.762 180.025L117.495 157.928L126.975 134.038L185.317 125.343L225.121 106.007L206.981 82.2358L269.417 52.7149L364.413 74.7583Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M358.245 83.9445L366.126 116.557L386.351 128.166L438.517 130.629L447.848 150.8L488.608 166.798L436.222 188.265L459.337 202.159L433.361 221.657L382.172 230.15L398.972 252.966L322.488 300.239L254.768 261.525L222.866 265.557L171.418 237.131L164.054 216.909L90.7478 197.663L90.941 180.103L133.321 160.065L143.312 137.874L195.688 129.887L231.379 112.322L215.481 90.7267L272.1 63.9556L358.245 83.9445Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M352.077 93.1308L359.802 122.286L379.057 133.339L425.427 135.996L433.72 154.392L469.51 168.942L422.503 188.354L443.362 201.11L419.628 218.855L373.483 226.817L387.855 246.776L319.308 288.474L258.384 253.7L229.298 256.922L182.311 231.334L175.76 213.212L110.593 195.958L111.12 180.182L149.146 162.202L159.647 141.71L206.058 134.431L237.636 118.638L223.979 99.218L274.782 75.1964L352.077 93.1308Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M345.909 102.317L353.479 128.015L371.765 138.511L412.337 141.361L419.593 157.983L450.412 171.086L408.784 188.443L427.388 200.061L405.896 216.052L364.795 223.485L376.739 240.586L316.128 276.709L262 245.875L235.729 248.288L193.206 225.536L187.467 209.515L130.438 194.253L131.3 180.26L164.973 164.338L175.984 145.545L216.429 138.975L243.895 124.954L232.479 107.709L277.466 86.4376L345.909 102.317Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M339.741 111.503L347.156 133.745L364.472 143.684L399.247 146.727L405.465 161.575L431.314 173.23L395.065 188.531L411.413 199.012L392.164 213.25L356.107 220.152L365.622 234.396L312.948 264.944L265.616 238.05L242.162 239.653L204.1 219.739L199.173 205.818L150.283 192.548L151.479 180.338L180.798 166.475L192.321 149.381L226.799 143.518L250.153 131.27L240.979 116.2L280.149 97.6784L339.741 111.503Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M333.573 120.69L340.832 139.473L357.179 148.856L386.157 152.092L391.338 165.166L412.216 175.374L381.347 188.62L395.439 197.962L378.432 210.448L347.418 216.819L354.505 228.206L309.768 253.179L269.232 230.225L248.595 231.019L214.994 213.942L210.879 202.122L170.128 190.844L171.658 180.416L196.624 168.611L208.658 153.217L237.169 148.062L256.41 137.586L249.478 124.69L282.832 108.919L333.573 120.69Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M327.404 129.876L334.509 145.203L349.886 154.029L373.067 157.458L377.21 168.758L393.118 177.518L367.628 188.709L379.465 196.913L364.7 207.646L338.73 213.487L343.389 222.016L306.589 241.414L272.848 222.4L255.027 222.384L225.888 208.145L222.584 198.425L189.973 189.139L191.837 180.494L212.449 170.748L224.994 157.053L247.54 152.606L262.668 143.902L257.977 133.182L285.516 120.16L327.404 129.876Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M321.236 139.063L328.186 150.932L342.593 159.201L359.977 162.824L363.082 172.349L374.02 179.662L353.909 188.798L363.49 195.864L350.968 204.843L330.042 210.154L332.272 215.826L303.409 229.65L276.464 214.575L261.458 213.75L236.782 202.347L234.291 194.728L209.818 187.434L212.016 180.572L228.275 172.884L241.331 160.889L257.91 157.15L268.927 150.218L266.476 141.672L288.199 131.401L321.236 139.063Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M315.068 148.249L321.862 156.661L335.3 164.374L346.887 168.19L348.955 175.941L354.922 181.806L340.19 188.887L347.516 194.815L337.236 202.041L321.353 206.822L321.156 209.636L300.228 217.884L280.08 206.75L267.891 205.115L247.676 196.55L245.997 191.031L229.664 185.729L232.195 180.651L244.101 175.021L257.668 164.724L268.281 161.693L275.185 156.534L274.976 150.163L290.883 142.642L315.068 148.249Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
                <path
                  d="M308.9 157.435L315.539 162.39L328.007 169.547L333.797 173.556L334.827 179.532L335.824 183.95L326.471 188.976L331.542 193.766L323.504 199.239L312.665 203.489L310.039 203.446L297.048 206.12L283.696 198.925L274.323 196.48L258.57 190.752L257.703 187.334L249.509 184.025L252.374 180.729L259.927 177.158L274.005 168.561L278.65 166.238L281.442 162.85L283.475 158.654L293.566 153.883L308.9 157.435Z"
                  stroke="#4574F5"
                  strokeOpacity="0.25"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_3152">
                  <rect width="443" height="367" fill="white" transform="translate(390 367) rotate(180)" />
                </clipPath>
              </defs>
            </svg>
            <nav className="header__navigation navigation">
              <ul className="navigation__list">
                {languages.menu && languages.menu[isActiveLanguage].map((item, idx) => {
                  return (
                    <li key={idx} className="navigation__list-item">
                      <Link className="navigation__list-link" to={item.link}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="header__user-nav header-user-nav">
              <button
                className="header-user-nav__btn header-user-nav-btn"
                type="button"
                onClick={() => setOpenLanguage(!isOpenLanguage)}
              >
                <img className="header-user-nav-btn__img" src={require(`../assets/images/flag-${isActiveLanguage}.png`)} alt="flag" />
                <img
                  className="header-user-nav-btn__arrow"
                  src={require("../assets/images/lang-arrow.png")}
                  alt="arrow"
                />
                {isOpenLanguage && (
                  <ul className="header-user-nav-btn__list">
                    <li onClick={() => setActiveLanguage("ru")} className="header-user-nav-btn__list-item">
                      <p className="header-user-nav-btn__list-text">Ru</p>
                    </li>
                    <li onClick={() => setActiveLanguage("en")} className="header-user-nav-btn__list-item">
                      <p className="header-user-nav-btn__list-text">En</p>
                    </li>
                  </ul>
                )}
              </button>
            </div>
          </div>
          <button className="header__btn">
            <img className="header__btn-img" src={require("../assets/images/menu-icon.png")} alt="burger" />
            <img className="header__btn-img" src={require("../assets/images/menu-close-icon.png")} alt="burger-close" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
