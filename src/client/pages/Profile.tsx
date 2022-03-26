import React from "react";
import style from "./Profile.scss";

const Profile = () => {
  const contentList = [
    {
      contentName: "dwqd",
      imgUrl: "http://gdimg.gmarket.co.kr/2128333213/still/600?ver=1648192373",
    },
    {
      contentName: "dwqd",
      imgUrl:
        "http://gdimg1.gmarket.co.kr/goods_image2/exlarge_moreimg/212/833/2128333213/2128333213_00.jpg?ver=1648192373",
    },
    {
      contentName: "dwqd",
      imgUrl:
        "http://gdimg1.gmarket.co.kr/goods_image2/exlarge_moreimg/212/833/2128333213/2128333213_01.jpg?ver=1648192373",
    },
    {
      contentName: "dwqd",
      imgUrl: "http://gdimg.gmarket.co.kr/2128333213/still/600?ver=1648192373",
    },
  ];

  return (
    <div className={style.root}>
      <div className={style.info_wrap}>
        <div className={style.profile_wrap}>
          <img src="" alt="내 프로필 이미지" className={style.profile_img} />
          <button type="button" className={style.friend_btn}>
            친구 추가
          </button>
        </div>
        <div className={style.info}>
          <strong className={style.name}>노인성 - 서울의 정복자</strong>
          <p className={style.desc}>
            <span className={style.ell}>
              안녕하세요 저는 컴정 15 귀염둥이 권진우 입니다.
            </span>
          </p>
          <div className={style.text_wrap}>
            <a href="#" className={style.text}>
              친구 : <strong>0</strong>
            </a>
            <span className={style.text}>
              사진 : <strong>12</strong>
            </span>
            <span className={style.text}>
              칭호 : <strong>12</strong>
            </span>
          </div>
        </div>
      </div>
      <div className={style.image_wrap}>
        {/* [D] 이미지 없는 경우 추가 */}
        {contentList.map((item) => (
          <a href="#" className={style.item}>
            <div className={style.inner}>
              <img
                src={item.imgUrl}
                alt={item.contentName}
                className={style.img}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
