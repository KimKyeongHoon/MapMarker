import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        37.37864931006517,
        127.11419172667112
      ),
      level: 3,
    };

    new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: "500px", height: "400px" }} />;
};

export default KakaoMap;
