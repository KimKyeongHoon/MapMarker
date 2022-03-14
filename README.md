# 기획의도
- 코드리뷰, React 및 Rest API를 활용한 FrontEnd, BackEnd 작업 학습
- 사용자들은 여행을 가서 사진을 찍고 그 사진을 다시 추억할 때,
  그리고 새로운 곳으로 여행을 갈 떄, 지도에 표시된 이미지를 통해 
  간편하게 이미지를 확인 및 추억할 수 있고, 지도를 사진으로 채워감에 따른 성취감을 얻을 수 있다. 
- 시중에 나와있지 않은 지도를 활용한 이미지 활용 웹 구축을 목표
- 친목도모
- 떨어져버린 제하의 진우에 대한 신뢰 회복

# 프로젝트 설명
1. 사진 뷰
  - 내가 찍은 사진들을 볼 수 있음
2. 지도 뷰
  - 일반적인 지도에 마커가 표시되어있고 필터를 통해 다른사람의 마커를 볼 수 있음
  - 사진이 위치한 곳으로 로드뷰 오픈
3. 사진지도 뷰
  - 지도 영ㄱ영에 이미지를 삽입하여 지도를 채울 수 있음.

# 기능 설계
[![image](https://user-images.githubusercontent.com/54185900/158183983-362b1183-7063-4165-972f-7fabe362ac6d.png)](https://docs.google.com/spreadsheets/d/1TIymhU60-zdRCycat0OhzsLi4mMGeKhrqSw11TC_vRE/edit?usp=sharing)

# 추가될 기능
1. 로그인 기능
2. 맵 마킹 기능
 - 장소 설명, 내가 찍은 사진
3. 한반도 맵
 - 내가 방문한 지역 체크 및 찍은 사진으로 배경 대체
4. react-router

# 프로젝트 구조
npm run start

CRA
- Typescript
- React@14 - 함수형 컴포넌트 훅 사용
- scss, css-module

```
MapMarker/
├─── src
      ├ client
          ├─── @types: 외부 모듈, global 타입 파일
          ├─── assets: 정적 파일
          ├─── components: pages에서 쓰이는 컴포넌트: 폴더는 페이지명 camelCase
          ├─── pages: 화면 단위의 React 페이지 컴포넌트
          ├─── scss: 공통 scss 파일: 컴포넌트 단위는 tsx파일과 같은 네이밍으로 같은 폴더안에 위치
          ├─── svg: svg 파일 
          ├─── types: 타입 정의
          ├─── App.tsx: 앱 컴포넌트
          └─── index.tsx: 클라이언트 진입점
      └ server   
```

# 브랜치
 - 마스터 브랜치(릴리스) : master
 - 기본 작업 브랜치 : develop
 - 이외 develop을 기본으로 추가 브랜치 생성
 - 릴리즈시 develop에서 master로 merge
