# frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### 상세 설명

#### `components/`
- **CategoryList.js**: 사용자에게 카테고리의 리스트를 보여줍니다. 각 카테고리는 선택 가능한 링크로 구성됩니다.
- **PostCard.js**: 개별 포스트의 제목, 요약 및 이미지를 보여주는 카드 형태의 UI를 제공합니다.
- **PostList.js**: 여러 포스트 카드를 포함하는 리스트를 관리하고 표시합니다. 이 컴포넌트는 API로부터 데이터를 가져와 화면에 렌더링합니다.

#### `pages/`
- **index.js**: 애플리케이션의 메인 홈페이지입니다. 주요 내용과 링크를 포함하여 사용자에게 첫 화면을 제공합니다.
- **layout.js**: 페이지 전체의 레이아웃을 설정합니다. 다른 페이지 컴포넌트들이 이 레이아웃 안에 포함되어 표시됩니다.
- **login.js**: 로그인 기능을 위한 인터페이스를 제공합니다. 사용자 인증을 처리합니다.
- **signup.js**: 새로운 사용자가 계정을 생성할 수 있는 회원가입 폼을 제공합니다.

#### `styles/`
- **globals.css**: 전체 애플리케이션에 적용되는 전역 스타일을 정의합니다. 이 스타일 시트는 폰트, 색상 등의 기본 스타일을 설정합니다.