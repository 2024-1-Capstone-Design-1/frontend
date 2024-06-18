# 프론트엔드

이 프로젝트는 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)을 사용하여 구축된 [Next.js](https://nextjs.org/) 프로젝트입니다.


## 시작하기

다음이 설치되어 있는지 확인하세요:
- Node.js
- npm (Node 패키지 관리자)


프로젝트를 다운로드 받으세요:
```bash
git clone https://github.com/2024-1-Capstone-Design-1/frontend.git Cap-frontend
```
```bash
cd Cap-frontend
```

필요한 의존성을 설치하세요:
```bash
npm install
```

개발 서버를 실행하세요:

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

## 프로젝트 구조

```
src/app/
├── layout.js
├── page.js
├── board/
│   └── page.js
├── components/
│   └── Navbar.js
├── contexts/
│   └── AuthContext.js
├── login/
│   └── page.js
├── mypage/
│   ├── page.js
│   └── change-password/
│       └── page.js
├── signup/
│   └── page.js
└── styles/
    └── globals.css
```

## 내용 설명

- **app/**
  - **layout.js**: 애플리케이션의 레이아웃 구조를 정의합니다.
  - **page.js**: 애플리케이션의 메인 진입점입니다.
  - **board/**
    - **page.js**: 게시판 페이지의 로직과 구조입니다.
  - **components/**
    - **Navbar.js**: 네비게이션 바 컴포넌트입니다.
  - **contexts/**
    - **AuthContext.js**: 인증 상태 관리를 위한 컨텍스트입니다.
  - **login/**
    - **page.js**: 로그인 페이지의 로직과 구조입니다.
  - **mypage/**
    - **page.js**: 사용자 프로필 페이지의 로직과 구조입니다.
    - **change-password/**
      - **page.js**: 비밀번호 변경 페이지의 로직과 구조입니다.
  - **signup/**
    - **page.js**: 회원가입 페이지의 로직과 구조입니다.
  - **styles/**
    - **globals.css**: 애플리케이션의 글로벌 CSS 스타일입니다.
