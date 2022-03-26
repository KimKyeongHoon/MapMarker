import React, { useState } from "react";
import ViewMap from "./pages/ViewMap";
import Header from "./components/common/Header";
import Bottom, { TabType } from "./components/common/Bottom";
import "client/scss/reset.scss";

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
        return null;
    }
  };

  return (
    <>
      {/* [D] Render에서 min-width 설정 */}
      <Header />
      {renderMap(nowMapType)}
      <Bottom onClickTab={handleMapType} />
    </>
  );
}

export default App;
