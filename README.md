# 프론트엔드

이 프로젝트는 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)을 사용하여 구축된 [Next.js](https://nextjs.org/) 프로젝트입니다.

## 시작하기

먼저, 개발 서버를 실행하세요:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.js` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)를 사용하여 Inter라는 커스텀 Google 폰트를 자동으로 최적화하고 로드합니다.

## 더 알아보기

Next.js에 대해 더 알아보려면 다음 자료들을 확인하세요:

- [Next.js 문서](https://nextjs.org/docs) - Next.js의 기능과 API에 대해 학습하세요.
- [Next.js 배우기](https://nextjs.org/learn) - 상호작용이 가능한 Next.js 튜토리얼입니다.

[Next.js GitHub 저장소](https://github.com/vercel/next.js/)를 확인할 수 있습니다 - 피드백과 기여는 환영입니다!

## Vercel에서 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js의 창시자들이 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 확인하세요.


## 프로젝트 구조

```
src/
├── components/
│   ├── Header.js
├── pages/
│   ├── board.js
│   ├── index.js
│   ├── layout.js
│   ├── user.js
├── styles/
│   ├── Board.module.css
│   ├── index.module.css
│   ├── User.module.css
```

### components/

- `Header.js`: 헤더 컴포넌트

### pages/

- `board.js`: 게시판 페이지
- `index.js`: 메인 페이지
- `layout.js`: 레이아웃 페이지
- `user.js`: 사용자 페이지

### styles/

- `Board.module.css`: 게시판 페이지 스타일 시트
- `index.module.css`: 메인 페이지 스타일 시트
- `User.module.css`: 사용자 페이지 스타일 시트