"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { accessToken, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = accessToken;

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken]);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);

    router.push("/login");
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-xl font-bold text-gray-800 cursor-pointer">
            메인화면으로
          </p>
        </Link>
        <nav className="flex space-x-4">
          {isLoggedIn ? (
            <>
              {router.pathname !== "/mypage" && (
                <Link href="/mypage">
                  <p className="cursor-pointer">마이페이지</p>
                </Link>
              )}
              <p className="cursor-pointer" onClick={handleLogout}>
                로그아웃
              </p>
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
