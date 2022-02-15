# MapMarker
- 코드리뷰, 신규 기능 학습을 통한 실력향상을 목표

# 추가될 기능
1. 로그인 기능
2. 맵 마킹 기능
 - 장소 설명, 내가 찍은 사진
3. 한반도 맵
 - 내가 방문한 지역 체크 및 찍은 사진으로 배경 대체
4. react-router

## 프로젝트 구조
npm run start

CRA
- Typescript
- React@14 - 함수형 컴포넌트 훅 사용
- scss, css-module

```
MapMarker/
├─── src
  ├─── @types: 외부 모듈, global 타입 파일
  ├─── assets: 정적 파일
  ├─── components: pages에서 쓰이는 컴포넌트: 폴더는 페이지명 camelCase
  ├─── pages: 화면 단위의 React 페이지 컴포넌트
  ├─── scss: 공통 scss 파일: 컴포넌트 단위는 tsx파일과 같은 네이밍으로 같은 폴더안에 위치
  ├─── svg: svg 파일 
  ├─── types: 타입 정의
  ├─── App.tsx: 앱 컴포넌트
  └─── index.tsx: 클라이언트 진입점
```
