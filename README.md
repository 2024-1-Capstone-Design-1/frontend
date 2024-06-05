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

```
frontend/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── PostCard.js
│   │   ├── PostList.js
│   │   └── CategoryList.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── login.js
│   │   └── signup.js
│   ├── styles/
│   │   └── globals.css
│   ├── app/
│   │   └── ...
├── .eslintrc.json
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package-lock.json
├── package.json
└── README.md
```

### 상세 설명

#### `components/`
- **CategoryList.js**: 사용자에게 카테고리 목록을 보여줍니다. 각 카테고리는 선택 가능한 링크로 구성됩니다.
- **PostCard.js**: 개별 포스트의 제목, 요약 및 이미지를 보여주는 카드 형태의 UI를 제공합니다.
- **PostList.js**: 여러 포스트 카드를 포함하는 목록을 관리하고 표시합니다. 이 컴포넌트는 API로부터 데이터를 가져와 화면에 렌더링합니다.

#### `pages/`
- **index.js**: 애플리케이션의 메인 홈페이지입니다. 주요 내용과 링크를 포함하여 사용자에게 첫 화면을 제공합니다.
- **layout.js**: 페이지 전체의 레이아웃을 설정합니다. 다른 페이지 컴포넌트들이 이 레이아웃 안에 포함되어 표시됩니다.
- **login.js**: 로그인 기능을 위한 인터페이스를 제공합니다. 사용자 인증을 처리합니다.
- **signup.js**: 새로운 사용자가 계정을 생성할 수 있는 회원가입 폼을 제공합니다.

#### `styles/`
- **globals.css**: 전체 애플리케이션에 적용되는 전역 스타일을 정의합니다. 이 스타일 시트는 폰트, 색상 등의 기본 스타일을 설정합니다.