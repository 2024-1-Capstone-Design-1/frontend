// contexts/AuthContext.js

import { createContext, useContext, useState } from "react"; // 필요한 모듈 임포트

const AuthContext = createContext(); // AuthContext 생성

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null); // 액세스 토큰 상태 정의

  // 로그인 함수
  const login = (token) => {
    setAccessToken(token); // 액세스 토큰 설정
  };

  // 로그아웃 함수
  const logout = () => {
    setAccessToken(null); // 액세스 토큰 초기화
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children} {/* 자식 컴포넌트 렌더링 */}
    </AuthContext.Provider>
  );
};

// useAuth 훅을 정의하여 AuthContext를 쉽게 사용할 수 있도록 함
export const useAuth = () => useContext(AuthContext);
