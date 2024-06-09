import React, { useEffect, useState } from "react"; // 필요한 모듈 임포트
import Link from "next/link"; // Link 컴포넌트 임포트
import { useRouter } from "next/router"; // useRouter 훅 임포트

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 정의
  const router = useRouter(); // useRouter 훅 사용

  // 컴포넌트가 마운트될 때 실행되는 함수
  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      setIsLoggedIn(true); // 토큰이 있으면 로그인 상태로 설정
    } else {
      setIsLoggedIn(false); // 토큰이 없으면 로그아웃 상태로 설정
    }
  }, []);

  // 로그아웃 핸들러 함수
  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 제거
    setIsLoggedIn(false); // 로그아웃 상태로 설정
    router.push("/login"); // 로그인 페이지로 라우팅
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 fixed w-full z-40">
      {/* 상단바 디자인 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* 요소 자동정렬 */}
        <Link href="/">
          {/* 메인화면이동 */}
          <p className="text-xl font-bold text-gray-800 cursor-pointer">
            메인화면으로
          </p>
        </Link>
        <nav className="flex space-x-4">
          {isLoggedIn ? ( // 로그인 상태에 따른 네비게이션 렌더링
            <>
              {router.pathname !== "/mypage" && ( // 현재 페이지가 마이페이지가 아닐 때만 마이페이지 링크 렌더링
                <Link href="/mypage">
                  <p className="cursor-pointer">마이페이지</p>
                </Link>
              )}
              <p className="cursor-pointer" onClick={handleLogout}>
                로그아웃
              </p>{" "}
              {/* 로그아웃 링크 */}
            </>
          ) : (
            <Link href="/login">
              <p className="cursor-pointer">로그인</p>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
