import React, { useState } from "react";
import classnames from "classnames";
import KakaoMap from "client/components/KakaoMap";
import style from "./ViewMap.scss";

const ViewMap = () => {
  const [isHideTab, toggleSideTab] = useState(false);
  const handleSideTab = () => {
    toggleSideTab((isHideTab) => !isHideTab);
  };
  return (
    <div className={style.root}>
      <div
        className={classnames(style.side_wrap, { [style.is_hide]: isHideTab })}
      >
        <button
          type="button"
          className={style.side_toggle}
          onClick={handleSideTab}
        >
          ss
        </button>
      </div>
      <div className={style.map_wrap}>
        <div className={style.map}>
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

export default ViewMap;
