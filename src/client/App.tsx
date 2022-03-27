import React, { useState } from "react";
import ViewMap from "./pages/ViewMap";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bottom, { TabType } from "./components/common/Bottom";
import "client/scss/reset.scss";
import Profile from "./pages/Profile";

function App() {
  const [nowMapType, setMapType] = useState(TabType.Map);

  const handleMapType = (type: TabType) => {
    setMapType(type);
  };

  const renderMap = (type: TabType) => {
    switch (type) {
      case TabType.Map:
        return <ViewMap />;
      case TabType.PictureMap:
        return "사진지도";
      case TabType.FriendList:
        return "친구목록";
      default:
        return <ViewMap />;
    }
  };
  const isLocalDev = !true;

  return (
    <BrowserRouter>
      {/* [D] Render에서 min-width 설정, Router path 정리 */}
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={renderMap(nowMapType)} />
        {/* <Route path="*" element={renderMap(nowMapType)} /> */}
      </Routes>
      <Bottom onClickTab={handleMapType} />
    </BrowserRouter>
  );
}

export default App;
