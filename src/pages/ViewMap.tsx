import react from "react";
import KakaoMap from "../components/KakaoMap";
import style from "./ViewMap.scss";

const ViewMap = () => {
  return (
    <div className={style.root}>
      <div className={style.side_wrap} />
      <div className={style.map_wrap}>
        <div className={style.map}>
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

export default ViewMap;
