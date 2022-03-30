import React, { useState, useEffect } from "react";
import style from "./Bottom.scss";

type TProps = {
  onClickTab: (type: TabType) => void;
};

/* [D] 변수 페이지 분리 */
export enum TabType {
  Map = "map",
  PictureMap = "picturemap",
  FriendList = "friendlist",
}

const Bottom = ({ onClickTab }: TProps) => {
  const tabList = [
    {
      name: "지도",
      type: TabType.Map,
    },
    {
      name: "사진지도",
      type: TabType.PictureMap,
    },
    {
      name: "친구목록",
      type: TabType.FriendList,
    },
  ];

  const [nowTab, setNowTab] = useState(tabList[0].type);

  const handleTab = (type: TabType) => {
    setNowTab(type);
  };

  useEffect(() => {
    onClickTab(nowTab);
  });

  return (
    <div className={style.root} role="tablist">
      {/* [D] 버튼 탭 선택 시 화면 전환 */}
      {tabList.map((item, index) => (
        <button
          type="button"
          key={index}
          className={style.tab}
          onClick={() => {
            handleTab(item.type);
          }}
          role="tab"
          aria-selected={false}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Bottom;
