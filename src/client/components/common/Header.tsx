import React, { useState } from "react";
import style from "./Header.scss";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={style.root}>
      <a href="/" className={style.header_link}>
        <strong className={style.logo}>Map Marker</strong>
      </a>
      <div className={style.function_wrap}>
        <button
          type="button"
          className={style.function_btn}
          onClick={handlePopup}
        >
          <i className={style.function_icon}>햄버거</i>
        </button>
        {/* [D] 레이어 영역 외 클릭시 레이어 닫기 hook 추가 */}
        {showPopup && (
          <div className={style.function_layer}>
            <div className={style.profile_wrap}>
              <img
                src=""
                alt="내 프로필 이미지"
                className={style.profile_img}
              />
            </div>
            <div className={style.link_wrap}>
              <a href="#" className={style.link}>
                설정
              </a>
              <a href="/profile" className={style.link}>
                프로필
              </a>
              <a href="#" className={style.link}>
                로그아웃
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
